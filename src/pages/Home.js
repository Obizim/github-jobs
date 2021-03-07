import { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/Cards";
import Header from "../components/Header";
import RadioBtns from "../components/RadioBtns";
import { FetchContext } from "../context/FetchDataContext";

const Home = () => {
  const { fetchJobs } = useContext(FetchContext);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <Container>
      <Header />
      <Row className="gap-5 my-5">
        <Col md={4}>
          <RadioBtns />
        </Col>

        <Col className="my-2">
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
