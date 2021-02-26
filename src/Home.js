import { Container, Row, Col, Form, Card } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="gap-5 my-5">
        <Col md={4}>
          <Form>
            <Form.Check type="checkbox" label="Full time" />

            <Form.Group className="my-4">
              <Form.Label className="text-muted"> Location </Form.Label>
              <Form.Control
                className="outline-none"
                placeholder="zip-code, country"
              />
            </Form.Group>

            <section className="radioBtns my-4">
              <Form.Check type="radio" name="city" label="London" className="mb-2" />
              <Form.Check type="radio" name="city" label="New York" className="mb-2" />
              <Form.Check type="radio" name="city" label="Berlin" />
            </section>
          </Form>
        </Col>

        <Col className="my-4">
          <Card className="cards">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="cards">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
