import CrudTableRow from "../crudtablerow/CrudTableRow";
import { Form } from "react-bootstrap";
import "./crudtable.css";
export default function CrudTable({ datax, setDb }) {
  return (
    <table className="table" name="table">
      <thead
        style={{
          backgroundColor: "#031122",
          color: "white",
          textAlign: "center",
          opacity: "0.8",
          border: "1px solid white",
        }}
      >
        <tr>
          <th style={{ border: "1px dotted white" }}>
            <Form.Check
              type="checkbox"
              checked=""
              defaultValue="Bob"
              onChange={() => {}}
            />
          </th>
          <th style={{ border: "1px dotted white" }}>Project Address</th>
          <th style={{ border: "1px dotted white" }}>Date Created</th>
          <th style={{ border: "1px dotted white" }}>Status</th>
          <th style={{ border: "1px dotted white" }}>Company</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody style={{ border: "1px solid white" }}>
        {datax &&
          datax.map((el) => (
            <CrudTableRow el={el} projectid={el.id} setDb={setDb} key={el.id} />
          ))}
      </tbody>
    </table>
  );
}
