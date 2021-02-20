import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Searchpane from "../components/Searchpane";
import Viewer from "../components/Viewer";
import { Waypoint } from "react-waypoint";
import Axios from "axios";

const Index = () => {
  const [data, setData] = useState([]);
  const [datad, setDatad] = useState([]);

  useEffect(() => {
    fetchy();
  }, []);

  const fetchy = async () => {
    await Axios.get("/api/getdata").then((res) => {
      if (res) {
        setData(res.data);
      }
    });
  };
  // useEffect(() => {
  //   window.onscroll = function (ev) {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       fee();
  //     }
  //   };
  // }, []);

  const fee = async () => {
    await Axios.get("/api/getdata").then((res) => {
      if (res) {
        setData((prevdata) => {
          return [...new Set([...prevdata, ...res.data])];
        });
      }
    });
  };

  const sett = (s) => {
    setData(s);
  };

  return (
    <Container fixed>
      <Navbar />
      <Searchpane sett={sett} />
      <Viewer data={data} />
      <Waypoint onEnter={fee} />
    </Container>
  );
};

export default Index;
