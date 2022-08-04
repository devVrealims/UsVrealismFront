import React from "react";
import "./stat.css";
import { Table, Container, Row, Col } from "react-bootstrap";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";

const Stat = ({ uptitle, icon, subtitle, activeproj }) => {
  const iconio = `img/${icon}.svg`;

  return (
    <div>
      <Container>
        <Row
          style={{
            display: "flex",
            /*  border: "3px dotted green", */
          }}
        >
          <Col
            style={{
              display: "flex",
              /*   border: "3px dotted blue", */
              justifyContent: "center",
              backgroundColor: "#c3fb5a",
              borderRadius: "10px 0px 0px 0px",
            }}
          >
            <img
              src={iconio}
              width="35px"
              style={
                {
                  /* border: "green dotted 3px"  */
                }
              }
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              /*   border: "3px dotted orange", */
              justifyContent: "center",
              textAlign: "center",
              width: "auto",
              backgroundColor: "#13acb4",
              color: "white",
              padding: "8px",
              borderRadius: "0px 10px 0px 0px",
            }}
          >
            <Col className="dashi"> {uptitle}</Col>
            <Col className="shina">{activeproj}</Col>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            /*  border: "3px dotted red", */
            backgroundColor: "#4b4d4b",
            textAlign: "center",
            /*   justifyItems: "center",
            alignContent: "center",
            alignItems: "center", */
            padding: "5px",
            borderRadius: "0px 0px 10px 10px",
            boxShadow: "10px 10px 8px  gray",
          }}
        >
          <Col
            style={{
              /* display: "flex", */
              /*    border: "3px dotted black", */
              /*    justifyContent: "center",
              alignItems: "center", */
              color: "white",
            }}
          >
            <ReplayOutlinedIcon
              style={{ marginRight: "10px", color: "#c3fb5a" }}
            />
            {subtitle}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Stat;
