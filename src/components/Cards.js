import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { FetchContext } from "../context/FetchDataContext";

const Cards = () => {
  const {loading,jobs} = useContext(FetchContext)
  
  return loading ? (
      <section>Loading....</section>
  ) : (
    <section>
      {jobs.map((job) => (
        <Card key={job.id} className="cards d-flex flex-row align-items-center px-4 my-3 rounded">
             <Card.Img className="img-fluid w-25" src={job.company_logo} alt="company logo" />
          <Card.Body>
            <Card.Text>{job.company}</Card.Text>
            <Card.Text>{job.title}</Card.Text>
            <Button variant="outline-secondary">{job.type}</Button>
            <Card.Text className="mt-3 text-muted">{job.location}</Card.Text>  
          </Card.Body>
              
        </Card>
      ))}
    </section>
  );
};

export default Cards;
