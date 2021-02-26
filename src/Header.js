import {
  Container,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

const Header = () => {
  return (
      <Container className="my-4">
          <h4>Github Jobs</h4>
    <section className="header my-4">
        <Form>
          <InputGroup >
            <Form.Control placeholder="Titles,Companies,Country" />
              <Button variant="primary">Search</Button>
          </InputGroup>
        </Form>
    </section>
    </Container>
  );
};

export default Header;
