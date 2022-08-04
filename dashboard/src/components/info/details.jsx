import "./details.css";
import { gapi } from 'gapi-script';


import { Link } from "react-router-dom";

import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import InfoIcon from "@mui/icons-material/Info";
import {
  Audio,
  BallTriangle,
  ThreeDots,
  TailSpin,
  Rings,
  Puff,
  Oval,
  Hearts,
  Grid,
  Circles,
  Bars,
} from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Auth2 from "../auth2/Auth2";
import useAuth from "../../auth/useAuth";
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
  Accordion,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* import {gapi} from 'gapi-script'; */
/* import { Pdfviewer } from "../pdf/Pdfviewer";
import Projdetails from "./projdetails";
import Accordions from "./accordions"; */
/* import DrivePicker from "../googledrive/DrivePicker"; */
/* import GooPicker from "../googledrive/GooPicker"; */
/* import AsyncGapi from "../googledrive/AsyncGapi"; */
/* import Gapiauth2 from "../googledrive/gapiauth2"; */
/*  */
/* const API_KEY = "AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk";
const CLIENT_ID = "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com";
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/drive.metadata.readonly"; */
/*  */
const Details = () => {
  const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
  const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] = useState(false);
  const [signedInUser, setSignedInUser] = useState();
  const handleChange = (file) => {};
  const [googledrive, setGoogledrive] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const [idproj, setIdproj] = useState(auth.projid);
  const [form, setForm] = useState([]);
  const [clientcliid, setClientcliid] = useState("");
  const [homeownername, setHomeownername] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [sqft, setSqft] = useState("");
  const [projdatecreate, setProjectdatecreate] = useState("");
  const [contractor, setContractor] = useState({});
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState("");
  const [services, setServices] = useState([]);
  const [servicestable, setServicestable] = useState([]);
  const [surveyor, setSurveyor] = useState("");
  const [drafter, setDrafter] = useState("");
  const [details, setDetails] = useState("");
  const [note, setNote] = useState("");
  const [iframecontainer, setIframecontainer] = useState([]);
  const [iframecontainertwo, setIframecontainertwo] = useState([]);
  const [downloadcontainer, setDownloadcontainer] = useState([]);
  const [waveappid, setWaveappid] = useState("");
  const [waveappstatus, setWaveappstatus] = useState("");
  const [linkwaveapp, setLinkwaveapp] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayiframe, setDisplayiframe] = useState("none");
  const [displayiframetwo, setDisplayiframetwo] = useState("none");
  const [iframelink, setIframelink] = useState(
    /* "https://poly.cam/capture/74EDE752-7F6A-415A-85F6-67044198734A" */
    /* " https://drive.google.com/drive/u/1/folders/16DJkOuzpV2FM7oldKixoygzpFTdYpool" */
  );
  const [iframelinktwo, setIframelinktwo] = useState(
   /*  "https://drive.google.com/file/d/1cJLDHYSep58s0icIohg0HAZkiA8mag-V/view?usp=drivesdk" */
    /* "https://poly.cam/capture/74EDE752-7F6A-415A-85F6-67044198734A" */
  /*   " https://drive.google.com/drive/u/1/folders/16DJkOuzpV2FM7oldKixoygzpFTdYpool" */
    /* "https://drive.google.com/embeddedfolderview?id=1_2ajx9Ozf2dhod07_K8MY-WjXaP-4R-6#grid" */
  );
  const [projectfolders, setProjectfolders] = useState([]);
  const clients = [
    {
      id: 1,
      name: "admin",
    },
    {
      id: 2,
      name: "wisebuilders",
    },
    {
      id: 3,
      name: "vrealism",
    },
    {
      id: 4,
      name: "diego",
    },
    {
      id: 5,
      name: "amit",
    },
    {
      id: 6,
      name: "karen",
    },
    {
      id: 7,
      name: "liane",
    },
    {
      id: 8,
      name: "sunny",
    },
    {
      id: 9,
      name: "tester",
    },
    {
      id: 10,
      name: "gmbc",
    },
    {
      id: 23,
      name: "Sueling",
    },
    {
      id: 19,
      name: "Developer",
    },
    {
      id: 20,
      name: "Alejandro Vargas",
    },
    {
      id: 21,
      name: "Alejandro Carvajal",
    },
  ];
  const initialChat = [
    {
      id: null,
      client: "",
      sms: "",
    },
  ];
  const [chats, setChats] = useState(initialChat);
  const [currentclient, setCurrentclient] = useState(auth.clientid);
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

  const [activekeyvaluematter, setActivekeyvaluematter] = useState(0);
  const [activekeymatter, setActivekeymatter] = useState(1);
  const [activekeyvaluedrone, setActivekeyvaluedrone] = useState(0);
  const [activekeydrone, setActivekeydrone] = useState(1);
  const [activekeyvaluepoly, setActivekeyvaluepoly] = useState(0);
  const [activekeypoly, setActivekeypoly] = useState(1);


    /* const listFiles = (searchTerm = null) => {
    setIsFetchingGoogleDriveFiles(true);
    gapi.client.drive.files
      .list({
        pageSize: 10,
        fields: "nextPageToken, files(id, name, mimeType, modifiedTime)",
        q: searchTerm,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        setDocuments(res.files);
        console.log(documents);
      });
  };  
    const initClient = () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function (params) {
          listFiles();
        }
      );
  };  
   const handleClientLoad = () => {
    gapi.load("client:auth2", initClient);
  };  
    useEffect(() => {
    handleClientLoad();
  }, [loading]); */
  


  /******************* USEEFFECTS *************************************************/
  //Bring all  proj´s table by projid//
  useEffect(() => {
    setLoading(true);
    fetch("https://node.vrealism.com:5000/api/getprojbyid", {
      method: "POST",
      body: JSON.stringify({
        idproj,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setClientcliid(res[0].client_cli_id);
        setForm(res);
        setClientcliid(res[0].client_cli_id);
        setHomeaddress(res[0].proj_address);
        if (res[0].surveyor.length > 0) {
          setSurveyor(res[0].surveyor);
        } else {
          setSurveyor("Remenber");
        }
        if (res[0].surveyor.length > 0) {
          setDrafter(res[0].architec);
        } else {
          setDrafter("Remenber");
        }
        setSqft(res[0].squarefeet);
        const dateback = res[0].proj_dateCreated;
        const dateformat = new Date(dateback);
        const utc = new Intl.DateTimeFormat("en-US", {
          timeZone: "UTC",
          dateStyle: "full",
        }).format(dateformat);
        setProjectdatecreate(utc);
        setHomeownername(res[0].home_owner_name);
        setDetails(res[0].proj_description);
        setCompany(companiestosingleobject[res[0].proj_houseOwnerName - 1]);
        setStatus(res[0].proj_status);
        const clientid = res[0].client_cli_id;
        fetch("https://node.vrealism.com:5000/api/clientnamebyid", {
          method: "POST",
          body: JSON.stringify({
            clientid,
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((json) => {
            setContractor(json[0].cli_name);
            setLoading(false);
          });
      });
  }, [auth.projid]);
  //Bring all  proj´s table by projid//
  //Bring all chats by projid//
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/getsms", {
      method: "POST",
      body: JSON.stringify({
        idproj,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.map((items) => ({
          id: items.id,
          client: clients.find((el) => items.id_client === el.id),
          sms: items.sms,
        }));
        setChats(data);
      });
  }, [contractor]);
  //Bring all chats by projid//
  //Bring all project_services_table by projid//
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/getservbyid", {
      method: "POST",
      body: JSON.stringify({
        idproj,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => setServices(json));
  }, [details]);
  //Bring all project_services_table by projid//
  //Bring all services table//
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/servicestable")
      .then((res) => res.json())
      .then((res) => {
        setServicestable(res);
      });
  }, [status]);
  //Bring all services table//
  //Bring project link folders by projid //
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/getprojfilesbyid", {
      method: "POST",
      body: JSON.stringify({
        idproj,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
       /*  console.log(res); */
        setProjectfolders(res);
      });
  }, [company]);
  //Bring project link folders by projid //
  //Bring the invoice information//
  useEffect(() => {
    fetch("https://node.vrealism.com:5000/api/getinvoice", {
      method: "POST",
      body: JSON.stringify({
        idproj,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.length > 0) {
          setWaveappid(res[0].num_invoice);
          setWaveappstatus(res[0].inv_status);
          setLinkwaveapp(res[0].linkapp);
        } else {
          setWaveappid("Pending invoice ");
          setWaveappstatus("Pending generated ");
          setLinkwaveapp("Pending link ");
        }
      });
  }, [services]);
  //Bring the invoice information//
   //getting links to files download zone //
   useEffect(() => {
    const data = projectfolders.filter((elex) => {
      if (
        (elex.projfile_linkType === "floorplan") +
        (elex.projfile_linkType === "roofplan") +
        (elex.projfile_linkType === "siteplan") +
        (elex.projfile_linkType === "elevation")
      ) {
        return {
          key: elex.projfile_id,
          id: elex.projfile_id,
          linktype: elex.projfile_linkType,
          link: elex.projfile_link,
        };
      }
      if(elex.projfile_linkType === "googledrive"){
        setGoogledrive(elex.projfile_link);
      }
    });
    setDownloadcontainer(data);
   
  }, [projectfolders]);
  //getting links to files download zone /



  







  //make gapi on init//

/*   useEffect(()=>{
    const finfin = ()=>{
      gapi.load('client:auth2', ()=>{
        gapi.client.init({
          client_id:'1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com',
          scope:'https://www.googleapis.com/auth/drive.metadata.readonly'  
        }).then((nat)=>{
          console.log(nat)
        })
      })
    }

    finfin();

  },[]) */




  //make gapi on init//
 /******************* USEEFFECTS *************************************************/



 /******************* FUNCTIONS **************************************************/
  //sending sms from chat//
  const submitsms = (e) => {
    e.preventDefault();
    if (note === "") {
      alert("text a sms");
      return false;
    }
    fetch("https://node.vrealism.com:5000/chat/sms", {
      method: "POST",
      body: JSON.stringify({
        idproj,
        note,
        currentclient,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        const data = json.map((items) => ({
          id: items.id,
          client: clients.find((el) => items.id_client === el.id),
          sms: items.sms,
        }));
        setChats(data);
        setNote("");
      });
  };
  //sending sms from chat//
  //getting links to iframe zone //
  const iframeContainer = (e) => {
    e.preventDefault();
    const data = projectfolders.filter((elex) => {
      if (elex.projfile_linkType === e.target.id) {
        return {
          key: elex.projfile_id,
          id: elex.projfile_id,
          linktype: elex.projfile_linkType,
          link: elex.projfile_link,
        };
      }
    });
    setIframecontainer(data);
  };
  //getting links to iframe zone //


// set google drive folder link//

/* const handleClientLoad = () => {
  gapi.load('client:auth2', initClient);
}; */

/* const initClient = () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })
    .then(
      function () {
      
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      },
      function (error) {}
    );
}; */

/* const updateSigninStatus = (isSignedIn) => {
  if (isSignedIn) {
   
    setSignedInUser(gapi.auth2.getAuthInstance().currentUser.get().grant());
    
    listFiles();
  } else {
   console.log('error');
  }
}; */


/* const listFiles = ()=>{
  gapi.client.drive.files.list({
    pageSize: 500,
    fields: 'nextPageToken, files(id, name, mimeType, modifiedTime)',
  }).then((res)=>{
    console.log(res)
  })

} */


/* 1 */
/* var client_id = "1058919206979-6maneggfujm0ajlm0dgdkuk074vecjod.apps.googleusercontent.com",
scope = "https://www.googleapis.com/auth/drive.metadata.readonly",
immediate = true; */


// set google drive folder link//

  //getting links to iframe zone2 //
  const iframeContainertwo = (e) => {
    e.preventDefault();
    const data = projectfolders.filter((elex) => {
      if (elex.projfile_linkType === e.target.id) {
        return {
          key: elex.projfile_id,
          id: elex.projfile_id,
          linktype: elex.projfile_linkType,
          link: elex.projfile_link,
        };
      }
    });
    setIframecontainertwo(data);
  };
  //getting links to iframe zone2 // 
  //getting  number of files for badget//
  const callbacklenght = (back) => {
    return projectfolders.filter((typex) => typex.projfile_linkType === back)
      .length;
  };
  //getting  number of files for badget//
  //getting  number of files for download badget//
  const callbackdownloadlenght = (back) => {
    return projectfolders.filter(
      (typex) =>
        /*     typex.projfile_linkType === back && */
        (typex.projfile_linkType === "siteplan") +
        (typex.projfile_linkType === "elevation") +
        (typex.projfile_linkType === "floorplan") +
        (typex.projfile_linkType === "roofplan")
    ).length;
  };
  //getting  number of files for download badget//
/******************* FUNCTIONS **************************************************/



/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */


function searchCompany(suling){
  /* console.log(suling) */
  gapi.client.drive.files.list({
  pageSize:500,
  fields:'nextPageToken, files(id, name, mimeType, modifiedTime)',
  /*q:'name=\'ATC Design Center\'',*/
  q:`'${suling}' in parents`
  /*q:'name=\'Su-Ling\'',*/
  /* q:`id=\'${suling}\'`, */
  /*  q:`id=\'${suling}\'`,  */
  })
  .then((rere)=>{
  /* selectFolder(rere.result.files[0].id) */
  /*  selectFolder(rere.result.files[0])  */
  console.log(rere);
  /* selectPdf(rere, 'VR_1364_SPOONBILL_WAY_SUNNYVALE - ELEVATIONS.pdf') */
 /*  renderPdf(rere); */
  })
  
  //console.log(suling)
  }


/* 4 */
const renderPdf = (ri)=>{
  const linki = ri.result.files[0].webViewLink ;
  /* console.log(linki);
  window.location.replace(linki) */
  /* navigate(linki) */
  window.open(linki, "_blank");

}
/* 3 */
 const findDrive =(folder,link)=>{
      gapi.client.drive.files.list({
        pageSize:500,
        fields:'nextPageToken, files(id, name, mimeType, modifiedTime, webContentLink, webViewLink)',
        /* q:`'${folder}' in parents` */
      }).then((ress)=>{
        const name = "VR_1364_SPOONBILL_WAY_SUNNYVALE - SITE - FLOOR PLAN.pdf"
        gapi.client.drive.files.list({
        pageSize:500,
        fields:'nextPageToken, files(id, name, mimeType, modifiedTime, webContentLink, webViewLink)',
        q:`name=\'${link}\'`,
       }).then((ri)=>{
       /*  console.log(ri); */
           renderPdf(ri);
       })

      })
    }

    /* 2 */
   const initClient = (link)=>{
      gapi.client.init({
          'apiKey': 'AIzaSyBNPVvrMUVEGNXollqj4pQO0czA8RaRGRk',
      }).then(function ()
      {       
        gapi.client.load('drive','v3',()=>findDrive(googledrive,link));
      });
    }
    /* 1 */
    const handleClientLoad =(e, link)=>{
      e.preventDefault(); 
      gapi.load('client:auth2', ()=>initClient(link)); 
    }
  
  
/* °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° */




  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/*************************** PROJECT DETAILS **************************/}
      {/* PROJECT DETAILS FIRST ZONE */}
      {/* LINKS TITLE Form.Group */}
      <Form.Group
        style={{
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          <Button
            style={{
              backgroundColor: "rgb(246, 248, 253)",
              border: "none",
              color: "green",
            }}
            onClick={() => {
              auth.setIdcheck(idproj);
              navigate("/");
            }}
          >
            <ArrowCircleLeftOutlinedIcon
              style={{
                fontSize: "35px",
                color: "orange",
                marginLeft: "-15px",
              }}
            />
          </Button>
          Project details
        </div>
      </Form.Group>    
      {/* LINKS TITLE Form.Group */}
      {/* PROJECT DETAILS INFORMATION NAME ADDRESS DATE STATUS SERVICES CHAT */}
      <Form.Group
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {loading === true ? (
          <Container
            style={{
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Grid color="orange" height={420} width={80} />
          </Container>
        ) : (
          <>
            <Table
              striped
              bordered
              hover
              responsive
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Project</th>
                  <th>Sqft</th>
                  <th>Date Created</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {idproj}</td>
                  <td>{homeaddress}</td>
                  <td>{sqft}</td>
                  <td>{projdatecreate}</td>
                  <td>{status}</td>
                </tr>
              </tbody>
            </Table>

            <Table
              striped
              bordered
              hover
              responsive
            >
              <thead>
                <tr>
                  <th>Home Owner</th>
                  <th> Company</th>
                  <th>Surveyor</th>
                  <th>Drafter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> {homeownername}</td>
                  <td>{company}</td>
                  <td> {surveyor}</td>
                  <td>{drafter}</td>
                </tr>
              </tbody>
            </Table>

            <Table
              striped
              bordered
              hover
              responsive
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th> Services</th>
                  <th> Details</th>
                  <th>Comments</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <Form.Group
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <ul
                        style={{
                          width: "auto",
                          height: "auto",
                          display: "flex",
                          flexDirection: "column",
                          alignContent: "flex-start",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          alignContent: "flex-start",
                        }}
                      >
                        {servicestable.map((el) =>
                          services.find(
                            (item) => item.services_serv_id === el.serv_id
                          ) ? (
                            <Form.Check
                              key={el.serv_id}
                              style={{ marginLeft: "-30px" }}
                              type="radio"
                              checked={true}
                              label={el.serv_name}
                              onChange={() => {
                                return false;
                              }}
                            />
                          ) : null
                        )}
                      </ul>
                    </Form.Group>
                  </td>
                  <td>{details}</td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Group
                      style={{                        
                        backgroundColor: "rgb(246, 242, 242)",
                        boxShadow: "4px 4px 8px rgb(105, 93, 93)",
                        borderRadius: "10px",
                        width: "auto",
                        maxWidth: "450px",
                        maxHeight: "300px",
                        padding: "10px",
                      }}
                    >
                      <Form.Group
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Form.Group
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "2%",
                          }}
                        >
                          <div>
                            <ul style={{ marginTop: "5px" }}>
                              <p
                                style={{
                                  marginTop: "8px",
                                  fontSize: "15px",
                                  width: "auto",
                                  color: "gray",
                                  marginLeft: "-10px",
                                }}
                              >
                                Chat
                              </p>
                              {chats.map((chat) => (
                                <div key={chat.id}>
                                  <i
                                    style={{
                                      marginLeft: "-10px",
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    <p style={{ fontWeight: "bold" }}>
                                      {chat.client.name}{" "}
                                    </p>
                                    :{" "}
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        marginLeft: "5px",
                                        marginTop: "4px",
                                      }}
                                    >
                                      {" "}
                                      {chat.sms}
                                    </p>
                                  </i>
                                </div>
                              ))}
                            </ul>
                          </div>
                        </Form.Group>


                        <Form.Group
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          <Form.Control
                            type="text"
                            placeholder="..."
                            onChange={(e) => setNote(e.target.value)}
                            value={note}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Button
                            onClick={(e) => submitsms(e)}
                            style={{
                              width: "100%",
                              marginTop: "1px",
                              color: "gray",
                            }}
                            variant="warning"
                          >
                            Response Comment
                          </Button>
                        </Form.Group>

                      </Form.Group>

                    </Form.Group>
                  </td>
                </tr>
              </tbody>
            </Table>

          </>
        )}
      </Form.Group>
      {/* PROJECT DETAILS INFORMATION NAME ADDRESS DATE STATUS SERVICES CHAT */}
      {/* PROJECT DETAILS FIRST ZONE */}
      {/*************************** PROJECT DETAILS **************************/}


      {/**************************** FILES VIEWER ****************************/}
      {/* FILES VIEWER ZONE */}
      {/* FILES VIEWER TITLE */}
      <Form.Group>
        <p
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          Files Viewer{" "}
          <InfoIcon
            style={{
              padding: "4px",
              color: "orange",
              marginLeft: "30px",
              marginTop: "6px",
            }}
          />
          <small style={{ fontSize: "10px" }}>
            Click on the badge to get the link
          </small>
        </p>
      </Form.Group>
      {/* FILES VIEWER TITLE */}
      {/* LINKS BADGE MATTERPORT DRONE DEPLOY POLYCAM */}
      <Form.Group style={{ display: "flex" }}>

        {/* MATTERPORT */}
        <Form.Group>
          <Accordion
            defaultActiveKey={activekeyvaluematter} flush
          >
            <Accordion.Item eventKey={activekeymatter}>
              <Accordion.Header>
                <img
                  src="img/matteportlogo.png"
                  style={{ marginRight: "5px" }}
                  id="matterport"
                  onClick={(e) => iframeContainer(e)}
                />
                <small
                  style={{ fontSize: "18px" }}
                  id="matterport"
                  onClick={(e) => {
                    e.preventDefault();
                    if (activekeymatter === 1 && activekeyvaluematter === 0) {
                      setActivekeymatter(0);
                      setActivekeyvaluematter(0);
                    }
                    iframeContainer(e);
                  }}
                >
                  Matterport
                </small>
                <Badge
                  pill
                  bg="danger"
                  style={{
                    marginBottom: "4px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "15px",
                  }}
                  id="matterport"
                  onClick={(e) => {
                    iframeContainer(e);
                  }}
                >
                  {callbacklenght("matterport")}
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                <ul
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-around",
                    alignItems: "initial",
                    justifyContent: "space-around",
                    listStyle: "inside lower-roman",
                    /*  border: "dotted green 2px", */
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {iframecontainer.map((ele) => (
                    <li style={{ fontSize: "12px", width: "220px" }}>
                      {" "}
                      <a
                        style={{ textDecoration: "none" }}
                        href=""
                        key={ele.projfile_id}
                        onClick={(e) => {
                          e.preventDefault();
                          setIframelink(ele.projfile_link);
                          setDisplayiframe("block");
                        }}
                      >
                        {ele.projfile_linkType + ele.projfile_link.slice(1, 25)}
                      </a>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form.Group>
        {/* MATTERPORT */}

        {/* DRONE DEPLOY */}
        <Form.Group>
          <Accordion
            defaultActiveKey={activekeyvaluedrone} flush
          >
            <Accordion.Item eventKey={activekeydrone}>
              <Accordion.Header>
                <img
                  src="img/dronedeploylogo.png"
                  style={{ marginRight: "5px" }}
                  id="dronedeploy"
                  onClick={(e) => iframeContainer(e)}
                />
                <small
                  style={{ fontSize: "18px" }}
                  id="dronedeploy"
                  onClick={(e) => {
                    e.preventDefault();
                    if (activekeydrone === 1 && activekeyvaluedrone === 0) {
                      setActivekeydrone(0);
                    }
                    iframeContainer(e);
                  }}
                >
                  Drone Deploy
                </small>
                <Badge
                  pill
                  bg="primary"
                  style={{
                    marginBottom: "4px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "15px",
                  }}
                  id="dronedeploy"
                  onClick={(e) => iframeContainer(e)}
                >
                  {callbacklenght("dronedeploy")}
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                <ul
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-around",
                    alignItems: "initial",
                    justifyContent: "space-around",
                    listStyle: "inside lower-roman",
                    /*  border: "dotted green 2px", */
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  {iframecontainer.map((ele) => (
                    <li style={{ fontSize: "12px", width: "220px" }}>
                      {" "}
                      <a
                        style={{ textDecoration: "none" }}
                        href=""
                        key={ele.projfile_id}
                        onClick={(e) => {
                          e.preventDefault();
                          setIframelink(ele.projfile_link);
                          setDisplayiframe("block");
                        }}
                      >
                        {ele.projfile_linkType + ele.projfile_link.slice(1, 25)}
                      </a>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form.Group>
        {/* DRONE DEPLOY */}

        {/* POLY CAM */}
        <Form.Group>
          <Accordion  defaultActiveKey={activekeyvaluepoly} flush>
            <Accordion.Item eventKey={activekeypoly}>
              <Accordion.Header>
                <img
                  src="img/polycamlogo.png"
                  style={{ marginRight: "5px" }}
                  id="polycam"
                  onClick={(e) => iframeContainer(e)}
                />
                <small
                  style={{ fontSize: "18px" }}
                  id="polycam"
                  onClick={(e) => {
                    e.preventDefault();
                    if (activekeypoly === 1 && activekeyvaluepoly === 0) {
                      setActivekeypoly(0);
                    }
                    iframeContainer(e);
                  }}
                >
                  Poly Cam
                </small>

                <Badge
                  pill
                  bg="dark"
                  style={{
                    marginBottom: "4px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    fontSize: "15px",
                  }}
                  id="polycam"
                  onClick={(e) => iframeContainer(e)}
                >
                  {callbacklenght("polycam")}
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                <ul
                  style={{
                    height: "auto",
                    width: "auto",
                    display: "flex",
                    flexDirection: "row",
                    listStyle: "inside lower-roman",
                  }}
                >
                  {iframecontainer.map((ele) => (
                    <li style={{ fontSize: "12px", width: "auto" }}>
                      <a
                        style={{ textDecoration: "none" }}
                        href=""
                        key={ele.projfile_id}
                        onClick={(e) => {
                          e.preventDefault();
                          setIframelink(ele.projfile_link);
                          setDisplayiframe("block");
                        }}
                      >
                        {ele.projfile_linkType + ele.projfile_link.slice(1, 25)}
                      </a>
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form.Group>
        {/* POLY CAM */}

      </Form.Group>
      {/* LINKS BADGE MATTERPORT DRONE DEPLOY POLYCAM */}
      {/* FILES VIEWER ZONE */}
      {/*  GENERATE LINKS ZONE AND IFRAME 1 */}
      <Form.Group
        style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "auto",
        }}
      >
        <iframe
          src={iframelink}
          style={{
            marginTop: "5px",
            width: "auto",
            height: "600px",
            display: `${displayiframe}`,
          }}
        />
      </Form.Group>
      {/* GENERATE LINKS ZONE AND IFRAME 1 */}
      {/**************************** FILES VIEWER ****************************/}



      {/**************************** PDF VIEWER ******************************/}
      {/* PDF VIEWER ZONE */}
      {/* PDF VIEWER TITLE */}
      <Form.Group>
        <p
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "60px",
            marginBottom: "10px",
          }}
        >
          Pdf Viewer
          <InfoIcon
            style={{
              padding: "4px",
              color: "orange",
              marginLeft: "30px",
              marginTop: "6px",
            }}
          />
          <small style={{ fontSize: "10px" }}>
            Click on the badge to get the link
          </small>
        </p>
      </Form.Group>
      {/* PDF VIEWER TITLE */}
      {/* LINKS BADGE ELEVATIONS FLOORPLAN AR SITEPLAN ROOFPLAN */}
      <Form.Group style={{ display: "flex" }}>

        {/* ELEVATIONS */}
        <Form.Group>
        <Accordion defaultActiveKey={[0]} flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <small
                style={{ fontSize: "18px" }}
                id="elevation"
                onClick={(e) => iframeContainertwo(e)}
              >
                Elevations
              </small>
              <Badge
                pill
                bg="danger"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                id="elevation"
                onClick={(e) => iframeContainertwo(e)}
              >
                {callbacklenght("elevation")}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "space-around",
                  alignItems: "initial",
                  justifyContent: "space-around",
                  listStyle: "inside lower-roman",
                  marginTop: "10px",
                }}
              >
                {" "}
                {iframecontainertwo.map((ele) => (
                  <li style={{ fontSize: "12px", width: "220px" }}>
                    {" "}
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      key={ele.projfile_id}
                      onClick={(e) => {
                        e.preventDefault()
                        /* setIframelinktwo(ele.projfile_link); */
                       /*  console.log(ele.projfile_link) */
                        handleClientLoad(e, ele.projfile_link);
                       /*  finfin(); */
                      }}
                    >
                      {ele.projfile_link}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
        </Form.Group>
        {/* ELEVATIONS */}      

        {/* FLOORPLAN */}
        <Form.Group>
        <Accordion defaultActiveKey={[0]} flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <small
                style={{ fontSize: "18px" }}
                id="floorplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                Floor Plan
              </small>
              <Badge
                pill
                bg="primary"
                style={{
                  /* marginBottom: "4px", */
                  marginLeft: "5px",
                  marginRight: "5px",
                  /* marginTop: "5px", */
                }}
                id="floorplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                {callbacklenght("floorplan")}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "space-around",
                  alignItems: "initial",
                  justifyContent: "space-around",
                  listStyle: "inside lower-roman",
                  /*  border: "dotted green 2px", */
                  marginTop: "10px",
                }}
              >
                {" "}
                {iframecontainertwo.map((ele) => (
                  <li style={{ fontSize: "12px", width: "220px" }}>
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      key={ele.projfile_id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClientLoad(e, ele.projfile_link);
                      }}
                    >
                      {ele.projfile_link}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Form.Group>
        {/* FLOORPLAN */}

        {/* AR */}
        <Form.Group>
          <Accordion defaultActiveKey={[0]} flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <small
                style={{ fontSize: "18px" }}
                id="ar"
                onClick={(e) => iframeContainertwo(e)}
              >
                AR
              </small>
              <Badge
                pill
                bg="black"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                id="ar"
                onClick={(e) => iframeContainertwo(e)}
              >
                {callbacklenght("ar")}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "space-around",
                  alignItems: "initial",
                  justifyContent: "space-around",
                  listStyle: "inside lower-roman",
                  marginTop: "10px",
                }}
              >
                {" "}
                {iframecontainertwo.map((ele) => (
                  <li style={{ fontSize: "12px", width: "220px" }}>
                    {" "}
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      key={ele.projfile_id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClientLoad(e, ele.projfile_link);
                      }}
                    >
                      {ele.projfile_link}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Form.Group>
        {/* AR */}

        {/* SITEPLAN */}
        <Form.Group>
        <Accordion defaultActiveKey={[0]} flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <small
                style={{ fontSize: "18px" }}
                id="siteplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                Site Plan
              </small>
              <Badge
                pill
                bg="success"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                id="siteplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                {callbacklenght("siteplan")}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "space-around",
                  alignItems: "initial",
                  justifyContent: "space-around",
                  listStyle: "inside lower-roman",
                  marginTop: "10px",
                }}
              >
                {" "}
                {iframecontainertwo.map((ele) => (
                  <li style={{ fontSize: "12px", width: "220px" }}>
                    {" "}
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      key={ele.projfile_id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClientLoad(e, ele.projfile_link);
                      }}
                    >
                      {ele.projfile_link}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Form.Group>
        {/* SITEPLAN */}

        {/* ROOFPLAN */}
        <Form.Group>
        <Accordion defaultActiveKey={[0]} flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <small
                style={{ fontSize: "18px" }}
                id="roofplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                Roof Plan
              </small>
              <Badge
                pill
                bg="warning"
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
                id="roofplan"
                onClick={(e) => iframeContainertwo(e)}
              >
                {callbacklenght("roofplan")}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ul
                style={{
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "space-around",
                  alignItems: "initial",
                  justifyContent: "space-around",
                  listStyle: "inside lower-roman",
                  marginTop: "10px",
                }}
              >
                {" "}
                {iframecontainertwo.map((ele) => (
                  <li style={{ fontSize: "12px", width: "220px" }}>
                    {" "}
                    <a
                      style={{ textDecoration: "none" }}
                      href=""
                      key={ele.projfile_id}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClientLoad(e, ele.projfile_link);
                      }}
                    >
                      {ele.projfile_link}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Form.Group>
        {/* ROOFPLAN */}


      </Form.Group>
      {/* LINKS BADGE ELEVATIONS FLOORPLAN AR SITEPLAN ROOFPLAN */}
      {/* PDF VIEWER ZONE */}
      {/*  GENERATE LINKS ZONE AND IFRAME 2 */}
      <Form.Group
        style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "auto",
        }}
      >
       {/*  <div>
          <a href="https://drive.google.com/file/d/1cJLDHYSep58s0icIohg0HAZkiA8mag-V/view?usp=drivesdk" target="blank">https://drive.google.com/file/d/1cJLDHYSep58s0icIohg0HAZkiA8mag-V/view?usp=drivesdk</a>
          <a href="https://drive.google.com/uc?id=1cJLDHYSep58s0icIohg0HAZkiA8mag-V&export=download" target="blank">https://drive.google.com/uc?id=1cJLDHYSep58s0icIohg0HAZkiA8mag-V&export=download</a>

        </div> */}
       {/*   <iframe
          src={iframelinktwo}
          style={{
            marginTop: "5px",
            width: "auto",
            height: "600px",
            display: `${displayiframetwo}`,
          }}
        /> */}
        {/*  <Gapi /> */}
        {/*  <Goopicker /> */}
        {/* <Pdfviewer displayiframetwo={displayiframetwo} /> */}
        {/*  <Pdfview /> */}
        {/*  <Reactpdfs /> */}
        {/*  <Goodrive />  */}
        {/*  <DrivePicker /> */}
      </Form.Group>
      {/*  GENERATE LINKS ZONE AND IFRAME 2 */}
      {/**************************** PDF VIEWER ******************************/}

      
      {/*************************** FILES DOWNLOAD ***************************/}
      {/* FILES DOWNLOAD TITLE */}
      <Form.Group>
        <p
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "60px",
            marginBottom: "-10px",
          }}
        >
          Files Downloads
        </p>
      </Form.Group>
      {/* FILES DOWNLOAD TITLE */}
      {/* FILES DOWNLOAD BADGE PDF DOCUMENTS */}
      <Form.Group
        style={{
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CloudDownloadIcon
            style={{
              fontSize: "60px",
            }}
          />
          <Badge
            pill
            bg="secondary"
            style={{
              fontSize: "15px",
            }}
          >
            {callbackdownloadlenght("cad")}
          </Badge>
          <p>
            Files
          </p>
        </p>
        <Form.Group
          style={{
            display: "flex",
            marginLeft: "40px",
          }}
        >
          {downloadcontainer.map((ele) =>
            ele.projfile_linkType === "cad" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  key={ele.projfile_id}
                >
                  <p
                    style={{
                      marginLeft: "32px",
                      fontSize: "9px",
                      marginTop: "30px",
                      fontWeight: "bold",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIframelinktwo(ele.projfile_link);
                    }}
                  >
                    Preview
                  </p>
                </a>
                <img
                  src="/img/dwg.png"
                  style={{
                    width: "80px",
                    height: "50px",
                    marginTop: "-10px",
                    marginLeft: "10px",
                  }}
                />
                <a
                  href="https://drive.google.com/drive/folders/16DJkOuzpV2FM7oldKixoygzpFTdYpool"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <p
                    style={{
                      marginLeft: "30px",
                      fontSize: "9px",
                      marginTop: "7px",
                      fontWeight: "bold",
                    }}
                  >
                    Download
                  </p>
                </a>
              </div>
            ) : (
              <div>
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  key={ele.projfile_id}
                >
                  {" "}
                  <p
                    style={{
                      marginLeft: "30px",
                      fontSize: "9px",
                      marginTop: "30px",
                      fontWeight: "bold",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIframelinktwo(ele.projfile_link);
                    }}
                  >
                    {ele.projfile_linkType}
                  </p>
                </a>
                <img
                  src="/img/pdf.png"
                  style={{
                    width: "60px",
                    height: "50px",
                    marginTop: "-10px",
                    marginLeft: "20px",
                  }}
                />
                <a
                  href={ele.projfile_link}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <p
                    style={{
                      marginLeft: "28px",
                      fontSize: "9px",
                      marginTop: "7px",
                      fontWeight: "bold",
                    }}
                  >
                    Download
                  </p>
                </a>
              </div>
            )
          )}
        </Form.Group>
      </Form.Group>
      {/* FILES DOWNLOAD BADGE PDF DOCUMENTS */}
      {/*************************** FILES DOWNLOAD ***************************/}


      {/************************** INVOICE INFORMATION & DOWNLOAD ************/}
      {/* INVOICE INFORMATION TITLE */}
      <Form.Group>
        <p
          style={{
            color: "gray",
            fontSize: "30px",
            fontWeight: "bold",
            marginTop: "50px",
          }}
        >
          Invoice Information
        </p>
      </Form.Group>
      {/* INVOICE INFORMATION TITLE */}
      {/* INVOICE DETAILS AND WAVEAPP LINK */}
      <Form.Group>
        <Table
          striped
          bordered
          hover
          responsive
          style={{ border: "solid 1px gray" }}
        >
          <thead>
            <tr>
              <th>Wave app invoice id</th>
              <th>Wave status</th>
              <th>Link Wave App</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {waveappid}</td>
              <td> {waveappstatus}</td>
              <td>
                <a
                  rel={"external"}
                  className="fab fa-instagram"
                  target="_blank"
                  href={linkwaveapp}
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  {linkwaveapp}
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form.Group>
      {/* INVOICE DETAILS AND WAVEAPP LINK */}
      {/***************************  INVOICE INFORMATION & DOWNLOAD ************/}


      <Form.Group style={{ marginTop: "50px" }}>
        {/* <Gapiauth2 /> */}
        {/* <Goodrive /> */}
        {/*  <GooPicker /> */}
        {/* <Goopicker /> */}
        {/* <AsyncGapi /> */}
      </Form.Group>
   
    {/*<Form.Group>
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1_2ajx9Ozf2dhod07_K8MY-WjXaP-4R-6#grid"
          style={{
            marginLeft: "5px",
            marginTop: "5px",
            marginBottom: "5px",
            width: "600px",
            height: "600px",
            border: "dotted 3px blue",
            display: `${displayiframetwo}`,
          }}
        />
      </Form.Group>*/}


    {/*  <Auth2/> */}

    </Container>
  );
};

export default Details;
