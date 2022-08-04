import "./crudtablerow.css";
import { useState, useEffect } from "react";
import useAuth from "../../auth/useAuth";
import { useNavigate, useBlocker } from "react-router-dom";
import { Form } from "react-bootstrap";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import moment from "moment";
export default function CrudTableRow({ el, setDb, projectid }) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [backdate, setBackdate] = useState(el.dataCreated);
  const [idchecked, setIdchecked] = useState(false);
  const [deleteid, setDeleteid] = useState();
  const clientid = auth.clientid;
  const companiestosingleobject = [
    "GMBC",
    "Wisebuilders",
    "Diego Valencia",
    "Bay Remodeling",
    "InnovoBuilders",
    "Liane Carter Interiors",
    "Nuvision Construction",
    "Oasis Home Design",
    "Oro Coast Builders",
    "Velvet Home Staging",
    "Tiffany",
    "Sunny",
    "Sueling",
    "Karen",
    "Mr. & Mrs",
    "Deco Builders",
    "Independent",
    "Architec or Home Designer",
    "Vrealism",
  ];
  /**/
  const DeleteProject = (e) => {
    /*   e.preventDefault(); */
    /*   auth.setProjid(el.id); */
    const confirms = window.confirm(
      `Are you sure, to delete project id: ${el.id} from ${el.company}.`
    );
    if (confirms) {
      /*    setDeleteid(el.id); */
      fetch("https://node.vrealism.com:5000/delete/home/project", {
        method: "POST",
        body: JSON.stringify({
          projectid,
          clientid,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((res) => {
          const data = res.map((items) => ({
            id: items.proj_id,
            projectAddress: items.proj_address,
            status: items.proj_status,
            company: companiestosingleobject[items.proj_houseOwnerName - 1],
            dataCreated: items.proj_dateCreated,
          }));
          setDb(data);
        });
    } else {
      false();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    auth.setProjid(el.id);
    navigate("/edit");
  };
  const handleInfo = (e) => {
    e.preventDefault();
    auth.setProjid(el.id);
    navigate("/info");
  };
  const handleCheck = (e) => {
    setIdchecked(e.target.checked);
  };

  /*   useEffect(() => {
    console.log(auth.idcheck);
  }, []); */

  return (
    <tr className="tablerow" key={el.id}>
      <td style={{ borderRight: "1px solid white" }}>
        <Form.Check
          type="checkbox"
          /*   checked={idchecked} */
          checked={auth.idcheck === el.id ? true : false}
          value={el.id}
          onChange={(e) => handleCheck(e)}
        />
      </td>
      <td style={{ borderRight: "1px solid white" }}>
        <a href="#" onClick={(e) => handleInfo(e)}>
          {el.projectAddress}
        </a>
      </td>
      <td
        style={{ borderRight: "1px solid white", color: "rgb(122, 113, 113)" }}
      >
        {moment.utc(backdate).format("MMM Do YYYY")}
      </td>
      <td
        style={{ borderRight: "1px solid white", color: "rgb(122, 113, 113)" }}
      >
        {el.status}
      </td>
      <td
        style={{ borderRight: "1px solid white", color: "rgb(122, 113, 113)" }}
      >
        {el.company}
      </td>
      <td>
        <InfoIcon
          role="button"
          style={{ color: "orange" }}
          onClick={(e) => handleInfo(e)}
        />
        <EditIcon
          role="button"
          style={{ color: "rgb(64, 192, 243)" }}
          onClick={(e) => handleClick(e)}
        />
        <DeleteForeverIcon
          role="button"
          style={{ color: "#eb2b54" }}
          onClick={(e) => DeleteProject(e)}
        />
      </td>
    </tr>
  );
}
