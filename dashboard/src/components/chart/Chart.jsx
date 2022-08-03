import "./chart.css";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <Container
      style={{
        width: "700px",
        height: "250px",
        backgroundColor: "rgb(230,230,230)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        /* boxShadow: "8px 8px 8px rgb(150, 147, 147)", */
        boxShadow: " 8px 0px 0px  gray",
      }}
    >
      <Row>
        <Col>
          {" "}
          <p
            className="chartTitle"
            style={{ display: "flex", paddingTop: "20px" }}
          >
            {title}
            <DateRangeOutlinedIcon
              className="featuredIcon"
              style={{ color: "white" }}
            />
          </p>
        </Col>
      </Row>

      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#f4f4f8" />
          <Line type="monotone" dataKey={dataKey} stroke="#08f0f9" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
