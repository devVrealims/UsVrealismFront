import React from "react";
import "./projdetails.css";
import {
  Container,
  Form,
  Button,
  FloatingLabel,
  FormGroup,
  Label,
  Nav,
  Badge,
  Row,
  Col,
  Table,
} from "react-bootstrap";

const Projdetails = ({ homeaddress, sqft, projdatecreate }) => {
  return (
    <div>
      <Container
        style={{
          border: "3px red dotted",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            border: "green dotted 4px",
          }}
        >
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              border: "blue dotted 2px",
            }}
          >
            <Col>
              <p>Project</p>
            </Col>
            <Col>{homeaddress}</Col>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              border: "blue dotted 2px",
            }}
          >
            <Col>
              <p>Sqft</p>
            </Col>
            <Col>{sqft}</Col>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              border: "blue dotted 2px",
            }}
          >
            <Col>
              <p>Date Created</p>
            </Col>
            <Col>{projdatecreate}</Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projdetails;
