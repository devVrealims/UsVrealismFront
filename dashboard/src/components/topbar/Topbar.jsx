import { useState } from "react";
import useAuth from "../../auth/useAuth";
import { Link } from "react-router-dom";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import { Button, Modal } from "react-bootstrap";

export default function Topbar() {
  const auth = useAuth();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    auth.setUser(null);
  };
  const handleCloseit = () => {
    setShow(false);
  };

  /*   setTimeout(() => {
    setShow(true);
  }, 5000); */

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">VRealism</span> */}
          <Link to="/">
            <img
              src="/img/VRealism_final-01.png"
              onClick={() => auth.setIdcheck(auth.projid)}
            />
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer" style={{ color: "white" }}>
            {auth.user ? <NotificationsNone /> : null}
            {auth.user ? <span className="topIconBadge">8</span> : null}
          </div>
          <div className="topbarIconContainer" style={{ color: "white" }}>
            {auth.user ? <Settings /> : null}
          </div>
          <div className="topbarIconContainer" style={{ color: "white" }}>
            {auth.user ? auth.user : null}
          </div>
          {auth.user ? (
            <Button
              variant="outline-light"
              style={{
                height: "40px",
              }}
              onClick={() => auth.setUser(null)}
            >
              Logout
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
