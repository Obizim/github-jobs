import { Button, Form, InputGroup } from "react-bootstrap";

const Header = () => {
  return (
    <header className="my-4">
      <h4>
        <span className="title">Github</span> Jobs
      </h4>
      <section className="header my-4">
        <Form>
          <InputGroup>
            <Form.Control placeholder="Language/Framework e.g Node" />
            <Button variant="primary">Search</Button>
          </InputGroup>
        </Form>
      </section>
    </header>
  );
};

export default Header;
