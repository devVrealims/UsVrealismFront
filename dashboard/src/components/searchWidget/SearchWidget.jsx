import "./searchWidget.css";
import { useRef, useEffect } from "react";
import useAuth from "../../auth/useAuth";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
export default function SearchWidget({ search, setSearch }) {
  const auth = useAuth();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, [auth.searchi]);

  return (
    <Container className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <FormControl
        placeholder="By address"
        id="search"
        type="text"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        ref={inputRef}
      />
      <Button
        type="submit"
        style={{
          color: "#ffffff",
          marginTop: "0px",
          borderRadius: "0px",
          marginLeft:'-2px',
          /* marginLeft: "-20px", */
        }}
      >
        Search
      </Button>
    </Container>
  );
}
