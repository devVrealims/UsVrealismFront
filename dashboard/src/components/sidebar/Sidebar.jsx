import { useState } from "react";
import "./sidebar.css";
import useAuth from "../../auth/useAuth";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  CloudDownload,
} from "@material-ui/icons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const auth = useAuth();
  const [project, setProject] = useState(false);
  const [searching, setSearching] = useState(false);
  const [home, setHome] = useState(false);
  return (
    <div style={{ height: "auto" }}>
      {auth.user ? (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="/" className="link">
                  <li className="sidebarListItem">
                    <HomeOutlinedIcon
                      style={{ fontSize: "50px" }}
                      onClick={() => {
                        auth.setIdcheck(auth.projid);
                        auth.setSearchi(false);
                      }}
                      onMouseEnter={() => setHome(true)}
                      onMouseLeave={() => setHome(false)}
                    />
                    {home && (
                      <small
                        style={{ fontWeight: "bold", marginTop: "3px" }}
                        className="beauty"
                      >
                        Dashboard
                      </small>
                    )}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link
                  /* to="/#search" */ to={{
                    pathname: "/",
                    /*  search: "?sort=search", */
                    hash: "#search",
                    /*  state: { fromDashboard: true }, */
                  }}
                  className="link"
                >
                  <li
                    className="sidebarListItem"
                    onClick={() => auth.setSearchi(true)}
                  >
                    <ContentPasteSearchOutlinedIcon
                      style={{ fontSize: "50px" }}
                      onClick={() => auth.setIdcheck(auth.projid)}
                      onMouseEnter={() => setSearching(true)}
                      onMouseLeave={() => setSearching(false)}
                    />
                    {searching && (
                      <small
                        style={{ marginLeft: "5px", fontWeight: "bold" }}
                        className="beauty"
                      >
                        Project finder
                      </small>
                    )}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="/makeproject" className="link">
                  <li className="sidebarListItem">
                    <FactCheckOutlinedIcon
                      style={{ fontSize: "50px" }}
                      onMouseEnter={() => setProject(true)}
                      onMouseLeave={() => setProject(false)}
                    />
                    {project && (
                      <small
                        style={{ marginLeft: "5px", fontWeight: "bold" }}
                        className="beauty"
                      >
                        Project creator
                      </small>
                    )}
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="#" className="link">
                  <li className="sidebarListItem">
                    <SystemUpdateAltOutlinedIcon
                      style={{ fontSize: "50px", color: "gray" }}
                    />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <ul className="sidebarList">
                <Link to="#" className="link">
                  <li className="sidebarListItem">
                    <CalendarMonthOutlinedIcon
                      style={{ fontSize: "50px", color: "gray" }}
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
