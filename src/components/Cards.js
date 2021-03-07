import { useContext } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FetchContext } from "../context/FetchDataContext";

const Cards = () => {
  const { loading, jobs } = useContext(FetchContext);

  return loading ? (
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <section>
      {jobs.map(({ id, company_logo, company, title, type, location }) => (
        <Link to={`/position/${id}`} key={id}>
          <Card className="cards d-flex flex-row align-items-center px-4 my-3 rounded">
            <Card.Img
              className="company_logo"
              src={company_logo}
              alt="company logo"
            />
            <Card.Body>
              <Card.Text>{company}</Card.Text>
              <Card.Text>{title}</Card.Text>
              <Button variant="outline-secondary">{type}</Button>
              <Card.Text className="mt-3 text-muted">{location}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default Cards;
