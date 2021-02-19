import { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar";
import Searchpane from "../components/Searchpane";
import Viewer from "../components/Viewer";
import Axios from "axios";

const Index = () => {
  const [data, setData] = useState({});

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

  const sett = (s) => {
    setData(s);
  };

  return (
    <Container fixed>
      <Navbar />
      <Searchpane sett={sett} />
      <Viewer data={data} />
    </Container>
  );
};

export default Index;
