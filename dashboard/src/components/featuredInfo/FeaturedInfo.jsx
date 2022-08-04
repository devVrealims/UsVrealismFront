import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Chart } from "react-google-charts";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";

export default function FeaturedInfo() {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  return (
    <Container
      style={{
        width: "auto",
        display: "flex",
        height: "auto",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "-10px",
        /*    border: "dotted 3px red", */
      }}
    >
      <div
        className="featuredItem"
        style={{
          /* boxShadow: "8px 8px 8px 0px rgb(150, 147, 147)", */
          /*    boxShadow: " 8px 0px 0px  #659af3", */
          borderLeft: "8px solid  #659af3",
          /* border: "dotted 4px green", */
        }}
      >
        <span className="featuredTitle" style={{ color: "black" }}>
          Active projects
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{ color: "black" }}>
            8
          </span>
          <span className="featuredMoneyRate">
            <EventAvailableOutlinedIcon
              className="featuredIcon"
              style={{ color: "#659af3" }}
            />
          </span>
          <span className="featuredSub" style={{ color: "black" }}>
            Current Month
          </span>
        </div>
      </div>
      <div
        className="featuredItem"
        style={{
          /*  boxShadow: "8px 8px 8px rgb(150, 147, 147)", */
          /* boxShadow: " 8px 0px 0px  #3dad76", */
          borderLeft: "8px solid  #3dad76",
        }}
      >
        <span className="featuredTitle" style={{ color: "black" }}>
          Pending invoices
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{ color: "black" }}>
            $4,415
          </span>
          <span className="featuredMoneyRate">
            <ReceiptOutlinedIcon
              className="featuredIcon negative"
              style={{ color: "#3dad76" }}
            />
          </span>
          <span className="featuredSub" style={{ color: "black" }}>
            Current Month
          </span>
        </div>
      </div>
      <div
        className="featuredItem"
        style={{
          /* boxShadow: " 8px 0px 0px  #e0665c", */
          borderLeft: "8px solid #e0665c",
        }}
      >
        <span className="featuredTitle" style={{ color: "black" }}>
          Files assigned
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{ color: "black" }}>
            82
          </span>
          <span className="featuredMoneyRate">
            <EventAvailableOutlinedIcon
              className="featuredIcon"
              style={{ color: "#e0665c" }}
            />
          </span>
          <span className="featuredSub" style={{ color: "black" }}>
            Current Month
          </span>
        </div>
      </div>
      <div
        className="featuredItem"
        style={{
          /* boxShadow: " 8px 0px 0px  orange", */
          borderLeft: "8px solid orange",
        }}
      >
        <span className="featuredTitle" style={{ color: "black" }}>
          Total Projects
        </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney" style={{ color: "black" }}>
            1.340
          </span>
          <span className="featuredMoneyRate">
            <FactCheckOutlinedIcon
              className="featuredIcon"
              style={{ color: "orange" }}
            />
          </span>
          <span className="featuredSub" style={{ color: "black" }}>
            Current Year
          </span>
        </div>
      </div>
    </Container>
  );
}
