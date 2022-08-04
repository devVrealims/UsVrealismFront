import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, InputGroup, Modal } from "react-bootstrap";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";

import useAuth from "../../auth/useAuth";
import Image from "../../assets/images/ImportFormat";
import Espacio_h10px from "../../commons/Espacio_h10px/Espacio_h10px";
import Button from "react-bootstrap/Button";
import Title from "./components/title/Title";
import Label from "./components/label/Label";
import "./login.css";
import { Goologin } from "./components/google/Goologin";
import { MDBContainer } from "mdb-react-ui-kit";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//*********************************************************** //
////////////////////SEPARATOR///////////////////////////////////
//*********************************************************** //

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [showtwo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);
  const [clientid, setClientid] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef();
  const load = () => {
    setUser("");
    setPassword("");
    inputRef.current.focus();
  };

  //*********************************************************** //
  ////////////////////SEPARATOR///////////////////////////////////
  //*********************************************************** //

  //Fetch to bring the id of user and confirm login user//
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user && password) {
      fetch("https://node.vrealism.com:5000/entryLogin", {
        method: "POST",
        body: JSON.stringify({
          user,
          password,
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
    } else {
      setShowTwo(true);
    }
  };
  //Fetch to bring the id of user and confirm login user//

  //*********************************************************** //
  ////////////////////SEPARATOR///////////////////////////////////
  //*********************************************************** //
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: " calc(110vh - 50px)",
        width: "100%",
        background: "linear-gradient(to bottom , #0b2b52 10%,white )",
      }}
    >
      <Form.Group
        style={{
          width: "190px",
          height: " calc(70vh - 50px)",
          marginTop: "80px",
          borderRadius: "5% 0% 0% 5%",
          border: "white 3px solid",
        }}
      >
        <Row>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: "130px",
            }}
          >
            <Image />
          </Col>
        </Row>
        <Espacio_h10px />
        <Row>
          <Col
            className="legend"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "white",
            }}
          >
            Welcome Back !
          </Col>
        </Row>

        <Row>
          <Col
            className="legend2"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "white",
            }}
          >
            Enter your personal details
          </Col>
        </Row>
        <Row>
          <Col
            className="legend2"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            xxl="12"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "white",
            }}
          >
            to keep connected.
          </Col>
        </Row>
      </Form.Group>
      <Form.Group onLoad={load}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0% 5% 5% 0%",
            width: "230px",

            height: "calc(70vh - 50px)",

            backgroundColor: "white",

            marginTop: "80px",
          }}
        >
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
              <Title text="Login" />
            </Col>
          </Row>
          <Espacio_h10px />
          <Row>
            <Col
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              style={{ display: "flex" }}
            >
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <BadgeOutlinedIcon />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter ID"
                  ref={inputRef}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  style={{ fontSize: "10px" }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Espacio_h10px />
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <LockOutlinedIcon />
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ fontSize: "10px" }}
                />
              </InputGroup>
            </Col>
          </Row>
          <Espacio_h10px />
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
              <Button variant="outline-secondary" onClick={handleSubmit}>
                Entry
              </Button>
            </Col>
          </Row>
          <Espacio_h10px />
          <Goologin />
        </Container>
      </Form.Group>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <AssignmentLateOutlinedIcon
              style={{ fontSize: "40px", marginRight: "5px", color: "orange" }}
            />
            Oops !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="popap" style={{ marginBottom: "-10px" }}>
            We could not verify your account,
          </p>
          <p className="popap">Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showtwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>
            <AssignmentLateOutlinedIcon
              style={{ fontSize: "40px", marginRight: "5px", color: "orange" }}
            />
            Warning!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="popap" style={{ marginBottom: "-10px" }}>
            Please, fill all the fields.
          </p>
          <p className="popap">Try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleCloseTwo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
