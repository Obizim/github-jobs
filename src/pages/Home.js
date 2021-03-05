import { useContext, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Cards from "../components/Cards";
import { FetchContext } from "../context/FetchDataContext";

const Home = () => {

  const {fetchJobs,onRadioBtnChange} = useContext(FetchContext)

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  return (
    <Container>
      <Row className="gap-5 my-5">
        <Col md={4}>
          <Form>
            <Form.Check type="checkbox" label="Full time" />

            <Form.Group className="my-4">
              <Form.Label className="title text-muted"> Location </Form.Label>
              <Form.Control
                className="outline-none"
                placeholder="zip-code, country"
              />
            </Form.Group>

            <section className="radioBtns my-4">
              <Form.Check type="radio" name="city" value="london" label="London" onChange={onRadioBtnChange} className="mb-2" />
              <Form.Check type="radio" name="city" value="amsterdam" label="Amsterdam" onChange={onRadioBtnChange} className="mb-2" />
              <Form.Check type="radio" name="city" value="newyork" label="New York" onChange={onRadioBtnChange} className="mb-2" />
              <Form.Check type="radio" name="city" value="berlin" label="Berlin" onChange={onRadioBtnChange} />
            </section>
          </Form>
        </Col>
        
        <Col className="my-2">
          <Cards /> 
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
