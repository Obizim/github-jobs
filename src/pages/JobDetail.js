import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Parser from "react-html-parser";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = () => {
      fetch(
        `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${id}.json`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setJob(res);
          setLoading(false);
        });
    };

    fetchJobDetail();
  }, [id]);

  return loading ? (
      <div className="vh-100 d-flex align-items-center justify-content-center">
    <Spinner animation="border" role="status" variant="primary">
      <span className="sr-only">Loading...</span>
    </Spinner>
    </div>
  ) : (
    <Container className="my-4">
      <h4>
        <span className="title">Github</span> Jobs
      </h4>
      <Row className="my-5">
        <Col md={4}>
          <Link to="/"> ⬅ Back to search</Link>

          <p className="title text-muted mt-5"> HOW TO APPLY </p>
          <article className="description">{Parser(job.how_to_apply)}</article>
        </Col>
        <Col>
          <h6 className="my-4">{job.title}</h6>
          <Button variant="outline-secondary">{job.type}</Button>

          <div className="d-flex align-items-center my-3">
            <img
              src={job.company_logo}
              alt="company logo"
              className="company_logo"
            />
            <p>
              {job.company} <br />
              <span className="text-muted">{job.location}</span>
            </p>
          </div>

          <article>{Parser(job.description)}</article>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetail;
