import Navbar from "../components/Navbar";
import { Container } from "@material-ui/core";

const about = () => {
  return (
    <Container fixed>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Simple Assesment Application
      </h1>
    </Container>
  );
};

export default about;
