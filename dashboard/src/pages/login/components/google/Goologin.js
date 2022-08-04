import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../auth/useAuth";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import "./goologin.css";

export const Goologin = () => {
  const googleid =
    "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com";
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef();

  const responseGoogle = (response) => {
    const user = response.profileObj.email;
    fetch("https://node.vrealism.com:5000/entry", {
      method: "POST",
      body: JSON.stringify({
        user,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.length === 0) {
          setShow(true);
        } else {
          auth.setUser(json[0].username);
          auth.setId(json[0].id);
          auth.setClientid(json[0].user_client_id);
          const client = json[0].user_client_id;
          fetch("https://node.vrealism.com:5000/api/bringclient", {
            method: "POST",
            body: JSON.stringify({
              client,
            }),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => res.json())
            .then((backjson) => {
              auth.setClient(backjson[0].cli_name);
              auth.setType(backjson[0].type);
              auth.setRole(backjson[0].role);
              navigate("/");
            });
        }
      });
  };

  const failureGoogle = (response) => {
    console.log(response.error);
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <AssignmentLateOutlinedIcon
              style={{ fontSize: "40px", marginRight: "5px", color: "orange" }}
            />
            Oops !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="popup">
            It seems that your Google account is not related to your Vrealism
            account, please report this problem to Vrealism support.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <GoogleLogin
        clientId={googleid}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={failureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};
