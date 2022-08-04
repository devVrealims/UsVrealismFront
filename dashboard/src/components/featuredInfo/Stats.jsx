import { Container, Form, Row, Col } from "react-bootstrap";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import Stat from "./Stat";
import { useState, useEffect } from "react";

const Stats = ({
  activeproj,
  totalprojects,
  pendinginvoices,
  filesassigned,
}) => {
  const Project = AccountTreeOutlinedIcon;
  const Invoice = ReceiptOutlinedIcon;
  const Files = EventAvailableOutlinedIcon;
  const Total = FactCheckOutlinedIcon;
  const Update = ReplayOutlinedIcon;
  return (
    <Container
      style={{
        width: "auto",
        /*  border: "dotted 3px red", */
        /* justifyItems: "center", */
        /* alignContent: "center",
        alignItems: "center", */
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          justifyItems: "center",
          /*   border: "dotted 3px green", */
        }}
      >
        <Col
          style={{
            width: "auto",
            height: "auto",
            /* border: "dotted blue 3px", */
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stat
            uptitle="Active Projects"
            icon="1"
            subtitle="Current Week"
            activeproj={activeproj}
          />
        </Col>
        <Col
          style={{
            /*   border: "dotted blue 3px", */
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stat
            uptitle="Pending Invoices"
            icon="2"
            subtitle="Current Mont"
            activeproj={pendinginvoices}
          />
        </Col>
        <Col
          style={{
            /*  border: "dotted blue 3px", */
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stat
            uptitle="Files Assigned"
            icon="3"
            subtitle="Current Mont"
            activeproj={filesassigned}
          />
        </Col>
        <Col
          style={{
            /*     border: "dotted blue 3px", */
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stat
            uptitle="Total Projects"
            icon="4"
            subtitle="Current Year"
            activeproj={totalprojects}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
