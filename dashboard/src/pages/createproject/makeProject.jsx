import { useState, useEffect, useRef } from "react";
import useAuth from "../../auth/useAuth";
import {
  Form,
  Button,
  FloatingLabel,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Table,
  Modal,
} from "react-bootstrap";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import StorageIcon from "@mui/icons-material/Storage";
import { AddressAutoComplete } from "../../components/addressautocomplete/AddressAutoComplete";
import Geocode from "react-geocode";
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./makeproject.css";
const initialboxes = [
  {
    id: 1,
    checked: false,
    item: "Floor Plan",
  },
  {
    id: 2,
    checked: false,
    item: "Site Plan",
  },
  {
    id: 3,
    checked: false,
    item: "Elevation",
  },
  {
    id: 4,
    checked: false,
    item: "Roof Plan(Drone)",
  },
  {
    id: 5,
    checked: false,
    item: "Drone Video",
  },
  {
    id: 6,
    checked: false,
    item: "Drone Photography",
  },
];

const initialForm = {
  address: "",
  housesqft: "",
  homeownername: "",
  homeownerphone: "",
  homeownermail: "",
};

const MakeProject = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const auth = useAuth();
  const inputRef = useRef();
  const inputCompany = useRef();
  const inputClients = useRef();
  const [homeaddress, setHomeaddress] = useState("");
  const [jobday, setJobday] = useState();
  const [timeday, setTimeday] = useState();
  const [liberty, setLiberty] = useState("4 Pennsylvania Plaza, New York, NY");
  const [homeownername, setHomeownername] = useState("");
  const [homeownerphone, setHomeownerphone] = useState("");
  const [homeownermail, setHomeownermail] = useState("");
  const [housesqft, setHousesqft] = useState("");
  const [projectownername, setProjectownername] = useState("");
  const [clientid, setClientid] = useState("");
  const [companyrequest, setCompanyrequest] = useState("");
  const [projectdescription, setProjectdescription] = useState("");
  const [currentdate, setCurrentdate] = useState(new Date());
  const [checkboxes, setCheckboxes] = useState(initialboxes);
  const [clients, setClients] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [company2client, setCompany2client] = useState("");
  const [results, setResults] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [issending, setIssending] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [independentclient, setIndependentclient] = useState("");
  const expReg = /[0-9]/g;
  const expRegemail = /@/g;
  const [sqftlabel, setSqftlabel] = useState("House Sqft (Approx, Type it in floating point  2.400)");
  const [homeownerlabel, setHomeownerlabel] = useState("Homeowner Name");
  const [homeownerphonelabel, setHomeownerphonelabel] = useState("Homeowner Phone");
  const [homeownermaillabel, setHomeownermaillabel] = useState("Homeowner Email");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  /////////////////////////////////////////////////////////////////////////////////

  const RenderAddress = () => {
    Geocode.setApiKey("AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    Geocode.fromAddress(homeaddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        setZipcode(response.results[0].address_components[8].short_name);
        setState(response.results[0].address_components[5].short_name);
        setCity(response.results[0].address_components[3].short_name);
        setResults(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const RenderInit = () => {
    Geocode.setApiKey("AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk");
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    Geocode.fromAddress(liberty).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        setZipcode(response.results[0].address_components[8].short_name);
        setState(response.results[0].address_components[5].short_name);
        setCity(response.results[0].address_components[3].short_name);
        setResults(response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    setHomeaddress(form.address);
    setHousesqft(form.housesqft);
    setHomeownername(form.homeownername);
    setHomeownerphone(form.homeownerphone);
    setHomeownermail(form.homeownermail);
  }, [
    form.address,
    form.housesqft,
    form.homeownername,
    form.homeownerphone,
    form.homeownermail,
  ]);

  useEffect(() => {
    RenderAddress();
  }, [homeaddress]);

  useEffect(() => {
    RenderInit();
  }, []);

  //////////////////////////////////////////////////////////////////////////////////

  const containerStyle = {
    width: "450px",
    height: "370px",
    backgroundColor: "white",
  };

  /////////////////////////////////////////////////////

  const createIndClient = (e) => {
    setIndependentclient(e.target.value);
    setProjectownername(e.target.id);
  };

  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //

  //Toggle the checkboxes//
  const handleCheck = (id) => {
    const listItems = checkboxes.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCheckboxes(listItems);
  };
  //Toggle the checkboxes//

  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //

  //Bring the companies//
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/companies")
      .then((res) => res.json())
      .then((res) => {
        setCompanies(res);
      });
  }, []);
  //Bring the companies//

  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //

  //Bring the client by company and set company//
  const bringClientFunction = (e) => {
    setCompanyrequest(e);
    setCompany2client(e);
    const company = e;
    fetch("https://node.vrealism.com:5000/bringClient", {
      method: "POST",
      body: JSON.stringify({
        company,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.map((items) => ({
          name: items.cli_name,
          id: items.cli_id,
        }));
        setClients(data);
      });
  };

  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //

  const regexNumbers = /^[+-]?([0-9]+([0-9]*)?|[0-9]+)$/;
  const regexAlpha = /^[A-Za-z\s]+$/;
  const regexInteger = /[0-9]/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  const validateForm = (form) => {
    let errors = {};

    if(form.address.length >= 455){
      errors.address = "Address field value is to long";
    }    
    if(form.housesqft.length >= 455){
      errors.housesqft = "House sqft field value is to long";
    }

    if (form.homeownername.trim().length > 35) {
      errors.homeownername = "Home owner name field value is to long";
    } 

    if (form.homeownerphone.trim().length > 10) {
      errors.homeownerphone = "Home owner phone field value is to long";
    } 
    if (form.homeownermail.trim().length > 30) {
      errors.homeownermail = "Home owner mail field value is to long";
    }
   /*  if (!form.address.trim()) {
      errors.address = "Address field value is required";
    } else if (form.address.length <= 5) {
      errors.address = "Address field value is to short";
    } else if (form.address.length > 45) {
      errors.address = "Address field value is to long";
    } */

  /*   if (!form.housesqft.trim()) {
      errors.housesqft = "House sqft field value is required";
    } else if (form.housesqft.trim().length < 3) {
      errors.housesqft = "House sqft filed value is to short";
    } else if (form.housesqft.trim().length > 6) {
      errors.housesqft = "House sqft filed value is to long";
    } else if (regexNumbers.test(form.housesqft.trim())) {
      errors.housesqft = "House sqft field value must be float point";
    } */

   /*  if (!form.homeownername.trim()) {
      errors.homeownername = "Home owner name  field value is required";
    } else if (!regexAlpha.test(form.homeownername.trim())) {
      errors.homeownername = "Home owner name field value must be literal";
    } else if (form.homeownername.trim().length > 35) {
      errors.homeownername = "Home owner name field value is to long";
    } else if (form.homeownername.trim().length < 5) {
      errors.homeownername = "Home owner name field value is to short";
    } */
/* 
    if (!form.homeownerphone.trim()) {
      errors.homeownerphone = "Home owner phone field  value is required";
    } else if (!regexInteger.test(form.homeownerphone.trim())) {
      errors.homeownerphone = "Home owner phone field value must be a numbers";
    } else if (form.homeownerphone.trim().length > 10) {
      errors.homeownerphone = "Home owner phone field value is to long";
    } else if (form.homeownerphone.trim().length < 10) {
      errors.homeownerphone = "Home owner phone field value is to short";
    } */

   /*  if (!form.homeownermail.trim()) {
      errors.homeownermail = "Home owner mail field  value is required";
    } else if (!regexEmail.test(form.homeownermail.trim())) {
      errors.homeownermail =
        "Home owner mail field value must contains @ and .com or co";
    } else if (form.homeownermail.trim().length > 30) {
      errors.homeownermail = "Home owner mail field value is to long";
    } else if (form.homeownermail.trim().length <= 6) {
      errors.homeownermail = "Home owner mail field value is to short";
    } */
    return errors;
  };

  const handleChance = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChance(e);
    setErrors(validateForm(form));
  };

  const enviarFetch = () => {


 fetch("https://node.vrealism.com:5000/create", {
      method: "POST",
      body: JSON.stringify({
        homeaddress,
        homeownername,
        homeownerphone,
        homeownermail,
        housesqft,
        projectownername,
        companyrequest,
        projectdescription,
        currentdate,
        checkboxes,
        independentclient,
        jobday,
        timeday,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setForm(initialForm);
          inputRef.current.reset();
          setShow(true);
        }
      }); 
  };

  ///Event of form submit///
  const handleSubmit = (e) => {

    e.preventDefault();
    enviarFetch();

    /* if (!form.length) {
      setErrors(validateForm(form));
    }
    if (!companyrequest) {
      inputCompany.current.focus();
    }
    if (!projectownername) {
      inputClients.current.focus();
    }
    if (!errors.length && form && companyrequest && projectownername) {
      enviarFetch();
    }

    {
      errors.address &&
        setTimeout(() => {
          setErrors({
            ...errors,
            ["address"]: "Address field is requiered !!!",
          });
        }, 1000);
    }
    {
      errors.housesqft &&
        setTimeout(() => {
          setErrors({
            ...errors,
            ["housesqft"]: "House sqft field is requiered !!!",
          });
        }, 2000);
    }
    {
      errors.homeownername &&
        setTimeout(() => {
          setErrors({
            ...errors,
            ["homeownername"]: "Home owner name field is requiered !!!",
          });
        }, 3000);
    }
    {
      errors.homeownerphone &&
        setTimeout(() => {
          setErrors({
            ...errors,
            ["homeownerphone"]: "Home owner phone field is requiered !!!",
          });
        }, 4000);
    }
    {
      errors.homeownermail &&
        setTimeout(() => {
          setErrors({
            ...errors,
            ["homeownermail"]: "Home owner mail field is requiered !!!",
          });
        }, 5000);
    } */
  };
  ///Event of form submit///

  //*********************************************************** //
  ////////////////////SEPARATOR///////////////////////////////////
  //*********************************************************** //
  return (
    <Container
      style={{
        display: "flex",
        /*    border: "dotted red 3px", */
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <Form.Group
        style={{
          /* border: "3px green dotted", */
          display: "flex",
          flexDirection: "column",
          /* alignItems: "center", */
        }}
      >
        <Form.Group
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "",
          }}
        >
          <p
            className="built"
            style={{
              color: "gray",
              fontSize: "35px",
              fontWeight: "bold",
              /*    marginTop: "60px", */
              /*   marginLeft: "50px", */
              /*     marginBottom: "2px", */
            }}
          >
            As built service checklist
          </p>
        </Form.Group>
        <Form.Group
          style={{ marginBottom: "10px", color: "gray", marginTop: "" }}
        >
          <small>
            <FiberManualRecordIcon
              style={{ fontSize: "10px", color: "orange", marginRight: "5px" }}
            />
            Submit your request{" "}
          </small>
        </Form.Group>
        <Form onSubmit={handleSubmit} ref={inputRef}>
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label="House Address"
              className="mb-1"
            >
              <Form.Control
                style={{
                  width: "500px",
                  textAlign: "left",
                }}
                type="text"
                /* onChange={(e) => setHomeaddress(e.target.value)} */
                /* onChange={(e) => RenderAddress(e)} */
                /* onChange={(e) => setHomeaddress(e.target.value)} */
                onChange={(e) => handleChance(e)}
                onBlur={(e) => handleBlur(e)}
                /*onMouseUp={(e) => RenderAddress(e)} */
                value={form.address}
                name="address"
              />
            </FloatingLabel>
            {/* <Form.Group>
              {errors.address && (
                <p style={{ color: "red" }}>{errors.address}</p>
              )}
            </Form.Group> */}
            {errors.address && (
              <p
                style={{
                  color: "pink",
                  position: "absolute",
                  marginTop: "-45px",
                  marginLeft: "370px",
                  fontSize: "10px",
                  backgroundColor: "black",
                  width: "calc(auto + 15px)",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: "9999",
                }}
              >
                {errors.address}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label={sqftlabel}
              className="mb-1"
            >
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                /*   onChange={(e) => setHousesqft(e.target.value)} */
                /*          onChange={(e) => {
                  setHousesqft(e.target.value);
                  expReg.test(housesqft)
                    ? setSqftlabel(
                        "House Sqft (Approx, Type it in floating form  2,400)"
                      )
                    : setSqftlabel(
                        <div style={{ color: "red" }}>
                          Must have a floating point value 2,345
                        </div>
                      );
                }} */
                onChange={(e) => handleChance(e)}
                onBlur={(e) => handleBlur(e)}
                value={form.housesqft}
                name="housesqft"
              />
            </FloatingLabel>
            {errors.housesqft && (
              <p
                style={{
                  color: "yellow",
                  position: "absolute",
                  marginTop: "-45px",
                  marginLeft: "370px",
                  fontSize: "10px",
                  backgroundColor: "black",
                  width: "calc(auto + 15px)",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: "9999",
                }}
              >
                {errors.housesqft}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label={homeownerlabel}
              className="mb-1"
            >
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                /*    onChange={(e) => {
                  setHomeownername(e.target.value);
                  expReg.test(homeownername)
                    ? setHomeownerlabel(
                        <div style={{ color: "red" }}>
                          Must have a literal value !
                        </div>
                      )
                    : setHomeownerlabel("Homeowner Name");
                }} */
                onChange={(e) => handleChance(e)}
                onBlur={(e) => handleBlur(e)}
                value={form.homeownername}
                name="homeownername"
              />
            </FloatingLabel>
            {errors.homeownername && (
              <p
                style={{
                  color: "magenta",
                  position: "absolute",
                  marginTop: "-45px",
                  marginLeft: "370px",
                  fontSize: "10px",
                  backgroundColor: "black",
                  width: "calc(auto + 15px)",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: "9999",
                }}
              >
                {errors.homeownername}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label={homeownerphonelabel}
              className="mb-1"
            >
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                /*   onChange={(e) => {
                  setHomeownerphone(e.target.value);
                  expReg.test(homeownerphone)
                    ? setHomeownerphonelabel("Homeowner Phone")
                    : setHomeownerphonelabel(
                        <div style={{ color: "red" }}>
                          Must have a number value !
                        </div>
                      );
                }} */
                onChange={(e) => handleChance(e)}
                onBlur={(e) => handleBlur(e)}
                value={form.homeownerphone}
                name="homeownerphone"
              />
            </FloatingLabel>
            {errors.homeownerphone && (
              <p
                style={{
                  color: "aqua",
                  position: "absolute",
                  marginTop: "-45px",
                  marginLeft: "370px",
                  fontSize: "10px",
                  backgroundColor: "black",
                  width: "calc(auto + 15px)",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: "9999",
                }}
              >
                {errors.homeownerphone}
              </p>
            )}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label={homeownermaillabel}
              className="mb-1"
            >
              <Form.Control
                style={{ width: "500px" }}
                type="text"
                /*    onChange={(e) => {
                  setHomeownermail(e.target.value);
                  expRegemail.test(homeownermail)
                    ? setHomeownermaillabel("Homeowner Email")
                    : setHomeownermaillabel(
                        <div style={{ color: "red" }}>
                          Must have a @ character !
                        </div>
                      );
                }} */
                onChange={(e) => handleChance(e)}
                onBlur={(e) => handleBlur(e)}
                value={form.homeownermail}
                name="homeownermail"
              />
            </FloatingLabel>
            {errors.homeownermail && (
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  marginTop: "-45px",
                  marginLeft: "370px",
                  fontSize: "10px",
                  backgroundColor: "black",
                  width: "calc(auto + 15px)",
                  padding: "5px",
                  borderRadius: "5px",
                  zIndex: "9999",
                }}
              >
                {errors.homeownermail}
              </p>
            )}
          </Form.Group>
          {/*//*********************************************************** //
          /////////////////SEPARATOR//////////////////////////////////////
         //*********************************************************** //*/}
          {/* Bring  Companies */}
          <Form.Group className="mb-1" controlId="formBasicNamel">
            <Form.Select
              ref={inputCompany}
              style={{ width: "500px" }}
              aria-label="Default select example"
              //onChange={(e) => setCompanyrequest(e.target.value)}
              onChange={(e) => bringClientFunction(e.target.value)}
            >
              <option /* style={{ color: "red" }} */>
                Company requesting service
              </option>
              {companies.map((element) => (
                <option value={element.com_id} key={element.com_id}>
                  {element.com_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          {/* Bring  Companies */}
          {/*//*********************************************************** //
          /////////////////SEPARATOR//////////////////////////////////////
         //*********************************************************** //*/}
          {/* Bring Clients by Company */}
          <Form.Group className="mb-1" controlId="formBasicNamel">
            {company2client === "17" ? (
              <FloatingLabel label="Project owner name" className="mb-1">
                <Form.Control
                  id={Date.now()}
                  style={{ width: "700px" }}
                  type="text"
                  onChange={(e) => createIndClient(e)}
                />
              </FloatingLabel>
            ) : (
              <Form.Select
                ref={inputClients}
                style={{ width: "500px" }}
                aria-label="Default select example"
                onChange={(e) => setProjectownername(e.target.value)}
              >
                <option style={{ color: "#aeb1b4" }}>
                  Choose a project owner
                </option>
                {clients.map((el) => (
                  <option value={el.id} key={el.id}>
                    {el.name}
                  </option>
                ))}
              </Form.Select>
            )}
          </Form.Group>
          {/* Bring Clients by Company */}
          {/*//*********************************************************** //
          /////////////////SEPARATOR//////////////////////////////////////
          //*********************************************************** //*/}
          <Form.Group className="mb-1 mt-2" controlId="formBasicNamel">
            <FloatingLabel
              controlId="floatingInput"
              label="Input project´s description"
              className="mb-1"
            >
              <Form.Control
                style={{ width: "500px" }}
                as="textarea"
                aria-label="With textarea"
                value={projectdescription}
                onChange={(e) => setProjectdescription(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group
            style={{
              marginTop: "20px",
              color: "gray",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <p>Type of services</p>
          </Form.Group>
          <Form.Group
            className="mt-3"
            style={{ display: "flex", width: "500px" }}
          >
            {checkboxes.map((item) => (
              <Form.Check
                style={{
                  fontSize: "12px",
                  padding: "18px",
                  marginTop: "-20px",
                  marginLeft: "5px",
                }}
                key={item.id}
                type="checkbox"
                label={item.item}
                checked={item.checked}
                value={item.item}
                onChange={() => handleCheck(item.id)}
              />
            ))}
          </Form.Group>
          <Form.Group style={{height:'10px'}}>
          </Form.Group>

          <Form.Group style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>              
              <Form.Group style={{display:'flex', flexDirection:'column'}}>
                  <Form.Group
                    style={{
                      marginTop: "10px",
                      color: "gray",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                  <p>Job Day</p>
                  </Form.Group>
                  <Form.Group>
                  <Form.Control
                    style={{
                    width: "200px",
                    marginLeft: "1px",
                    marginTop: "1px",
                    }}
                    type="date"
                    value={jobday}
                    onChange={(e) => {
                    setJobday(e.target.value);
                    }}/>
                  </Form.Group>
              </Form.Group>
              <Form.Group style={{display:'flex', flexDirection:'column'}}>
                  <Form.Group
                    style={{
                      marginTop: "10px",
                      color: "gray",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    <p>Time</p>
                  </Form.Group>
                  <Form.Group>
                  <Form.Control
                  style={{
                  width: "200px",
                  marginLeft: "1px",
                  marginTop: "1px",
                  }}
                  type="time"
                  value={timeday}
                  onChange={(e) => {
                  setTimeday(e.target.value);
                  }}/>
                  </Form.Group>
              </Form.Group>
          </Form.Group>

          <Button
            variant="danger"
            type="submit"
            className="mt-20 buttonhover"
            style={{ marginTop: "30px", width: "100px" }}
          >
            Submit
          </Button>
          <Form.Group style={{ height: "50px" }}></Form.Group>
        </Form>
      </Form.Group>
      <Form.Group
        style={{
          /*   border: "3px blue dotted", */
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Form.Group style={{ marginTop: "105px", marginLeft: "20px" }}>
          {" "}
          {results && (
            <Form.Group /*  style={{ border: "dotted red 3px" }} */>
              <LoadScript googleMapsApiKey="AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk">
                <GoogleMap
                  mapTypeId="satellite"
                  zoom={18}
                  mapContainerStyle={containerStyle}
                  center={{ lat: latitude, lng: longitude }}
                >
                  <Marker position={{ lat: latitude, lng: longitude }} />
                </GoogleMap>
              </LoadScript>
            </Form.Group>
          )}
        </Form.Group>
        <Form.Group style={{ marginLeft: "20px" }}>
          <Table striped bordered hover responsive>
            <thead>
              {" "}
              <tr style={{ textAlign: "center" }}>
                <th>State</th>
                <th>City</th>
                <th>Zipcode</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ textAlign: "center" }}>
                <td> {state}</td>
                <td>{city}</td>
                <td>{zipcode}</td>
              </tr>
            </tbody>
          </Table>
        </Form.Group>
      </Form.Group>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <AssignmentTurnedInOutlinedIcon
              style={{
                fontSize: "40px",
                marginRight: "5px",
                color: "orange",
              }}
            />
            Project created succesfully !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="popap" style={{ marginBottom: "-10px" }}>
            {auth.client}, you can explorer on the home section.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MakeProject;
