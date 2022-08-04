import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import { useState, useEffect } from "react";
import useAuth from "../../auth/useAuth";
import SearchWidget from "../../components/searchWidget/SearchWidget";
import Title from "../../components/title/Title";
import CrudTable from "../../components/crudtable/CrudTable";
import ReactPaginate from "react-paginate";
import { Loader } from "../../components/loader/Loader";
import Espacio_h10px from "../../commons/Espacio_h10px/Espacio_h10px";
import Chartpie from "../../components/chartpie/Chartpie";
import Donut from "../../components/donut/Donut";
import Stats from "../../components/featuredInfo/Stats";
/* import { Dash } from "../../components/dashboard/Dash"; */
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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

import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormLabel,
} from "react-bootstrap";
import "./home.css";
import Paginateme from "../../components/paginate/Paginateme";

const initialDb = [
  {
    id: null,
    projectAddress: "",
    status: "",
    company: "",
    dataCreated: "",
  },
];

export default function Home() {
  const auth = useAuth();
  const [search, setSearch] = useState("");
  const [db, setDb] = useState(initialDb);
  const [user, setUser] = useState(auth.clientid);
  const type = auth.type;
  const role = auth.role;
  const [items, setItems] = useState([]);
  const [company, setCompany] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeprojects, setActiveprojects] = useState("");
  const [totalprojects, setTotalprojects] = useState("");
  const [pendinginvoices, setpendinginvoices] = useState("");
  const [filesassigned, setFilesassigned] = useState("");
  const urlapigetall = "https://node.vrealism.com:5000/api/getallproject";
  const urlapiget = "https://node.vrealism.com:5000/api/get";
  const [posts, setPosts] = useState([]);
  const [loadingpage, setLoadingpage] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsperpage, setPostperpage] = useState(8);
  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //

  const indexOfLastPost = currentpage * postsperpage;
  const indexOfFirstPost = indexOfLastPost - postsperpage;
  const currentPosts = db.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  ////*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //
  const companies = [
    {
      id: 1,
      name: "GMBC",
    },
    {
      id: 2,
      name: "Wisebuilders",
    },
    {
      id: 3,
      name: "Diego Valencia",
    },
    {
      id: 4,
      name: "Bay Remodeling",
    },
    {
      id: 5,
      name: "InnovoBuilders",
    },
    {
      id: 6,
      name: "Liane Carter Interiors",
    },
    {
      id: 7,
      name: "Nuvision Construction",
    },
    {
      id: 8,
      name: "Oasis Home Design",
    },
    {
      id: 9,
      name: "Oro Coast Builders",
    },
    {
      id: 10,
      name: "Velvet Home Staging",
    },
    {
      id: 11,
      name: "Tiffany",
    },
    {
      id: 12,
      name: "Sunny",
    },
    {
      id: 13,
      name: "Sueling",
    },
    {
      id: 14,
      name: "Karen",
    },
    {
      id: 15,
      name: "Mr. & Mrs",
    },
    {
      id: 16,
      name: "Deco Builders",
    },
    {
      id: 17,
      name: "Independent",
    },
    {
      id: 18,
      name: "Architec or Home Designer",
    },
    {
      id: 19,
      name: "Vrealism",
    },
  ];
  const companiestosingle = [
    {
      name: "GMBC",
    },
    {
      name: "Wisebuilders",
    },
    {
      name: "Diego Valencia",
    },
    {
      name: "Bay Remodeling",
    },
    {
      name: "InnovoBuilders",
    },
    {
      name: "Liane Carter Interiors",
    },
    {
      name: "Nuvision Construction",
    },
    {
      name: "Oasis Home Design",
    },
    {
      name: "Oro Coast Builders",
    },
    {
      name: "Velvet Home Staging",
    },
    {
      name: "Tiffany",
    },
    {
      name: "Sunny",
    },
    {
      name: "Sueling",
    },
    {
      name: "Karen",
    },
    {
      name: "Mr. & Mrs",
    },
    {
      name: "Deco Builders",
    },
    {
      name: "Independent",
    },
    {
      name: "Architec or Home Designer",
    },
    {
      name: "Vrealism",
    },
  ];
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

  //Consulta del home que trae projectos con el id del cliente//
  const BringInfoByClient = async () => {
    const feis = await fetch(
      auth.type === "superadmin" ? urlapigetall : urlapiget,
      {
        method: "POST",
        body: JSON.stringify({
          user,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const jotason = await feis.json();
    const data = jotason.map((items) => ({
      id: items.proj_id,
      projectAddress: items.proj_address,
      status: items.proj_status,
      company: companiestosingleobject[items.proj_houseOwnerName - 1],
      dataCreated: items.proj_dateCreated,
    }));
    setDb(data);
  };

  useEffect(() => {
    BringInfoByClient();
  }, [type]);
  //Consulta del home que trae projectos con el id del cliente//

  //Bring some querys for the dashboard active projects, pending invoices, files assigned, total projects //
  useEffect(() => {
    setLoading(true);
    const clientide = auth.clientid;
    fetch("https://node.vrealism.com:5000/api/getactiveprojects", {
      method: "POST",
      body: JSON.stringify({
        clientide,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setActiveprojects(json[0].id_count);
        fetch("https://node.vrealism.com:5000/api/dashboard/getallprojects", {
          method: "POST",
          body: JSON.stringify({
            clientide,
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then((ress) => ress.json())
          .then((coco) => {
            setTotalprojects(coco[0].ide_count);
            fetch(
              "https://node.vrealism.com:5000/api/dashboard/getallinvoices",
              {
                method: "POST",
                body: JSON.stringify({
                  clientide,
                }),
                headers: { "Content-Type": "application/json" },
              }
            )
              .then((ress) => ress.json())
              .then((jeison) => {
                setpendinginvoices(jeison[0].id_count);
                fetch(
                  "https://node.vrealism.com:5000/api/dashboard/getallprojectsfiles",
                  {
                    method: "POST",
                    body: JSON.stringify({
                      clientide,
                    }),
                    headers: { "Content-Type": "application/json" },
                  }
                )
                  .then((ress) => ress.json())
                  .then((eses) => setFilesassigned(eses[0].ide_count));
                setTimeout(() => {
                  setLoading(false);
                }, 400);                
              });
          });
      });
  }, [role]);
  //Bring some querys for the dashboard active projects, pending invoices, files assigned, total projects //

  //*********************************************************** //
  /////////////////SEPARATOR//////////////////////////////////////
  //*********************************************************** //
  //const handlePageClick = (data) => {};
  return (
    <Container className="home">
      <Container
        style={{
          marginTop: "30px",
          backgroundColor: "rgb(246, 242, 242)",
          boxShadow: "4px 4px 8px rgb(105, 93, 93)",
          borderRadius: "10px",
            /*  border: "3px green dotted", */
        }}
      >
        {loading === true ? (
          <Container
            style={{ width: "auto", display: "flex", justifyContent: "center" }}
          >
            <BallTriangle color="orange" height={270} width={80} />
          </Container>
        ) : (
          <>
           <Row style={{ paddingTop: "20px" }}>
              <Col>
                <Title title="Dashboard"/>
              </Col>
            </Row>
       {/*      <br /> */}
            <Row /* style={{ border: "3px red dotted" }} */>
              <Col>
                <Stats
                  activeproj={activeprojects}
                  totalprojects={totalprojects}
                  pendinginvoices={pendinginvoices}
                  filesassigned={filesassigned}
                />
                {/* <FeaturedInfo /> */}
              </Col>
            </Row>
            <br />
            <Container
              style={{
                display: "flex",
                width: "100%",
              }}
            >
            </Container>
            <Espacio_h10px />
          </>
        )}
      </Container>
      <br/>
      <br/>
      <Row>
        <Col>
          <Title title="Find a project"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <SearchWidget search={search} setSearch={setSearch} />
        </Col>
      </Row>
      <br/>
      <br/>
      <Row>
        <Col>
          <Title title="Current projects" />
        </Col>
      </Row>
      {db && (
        <Row>
          <Container>
            <CrudTable
              datax={currentPosts.filter((item) =>
                item.projectAddress.toLowerCase().includes(search.toLowerCase())
              )}
              setDb={setDb}
            />
          </Container>
        </Row>
      )}
      <br/>
      <Paginateme db={db} postsperpage={postsperpage} paginate={paginate} />
    </Container>
  );
}
