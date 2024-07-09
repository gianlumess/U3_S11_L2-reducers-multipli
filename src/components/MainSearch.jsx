import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { HeartFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJobsToArrayAction, addQueryValue, getJobsAction } from "../redux/actions";

const MainSearch = () => {
  /*   const [query, setQuery] = useState("");
   */ const [jobs, setJobs] = useState([]);
  const favouritesLength = useSelector((state) => state.preferiti.content.length);
  const dispatch = useDispatch();
  const query = useSelector((state) => state.jobs.query);
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  /* const handleChange = (e) => {
    setQuery(e.target.value);
  }; */
  const handleChange = (e) => {
    dispatch(addQueryValue(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* getJobsAction(query); */

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        dispatch(addJobsToArrayAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="d-flex sticky-top">
        <Link className="ms-auto mt-3" to="/favourites">
          <Button>
            <HeartFill fill="currentColor" /> {favouritesLength}
          </Button>
        </Link>
      </div>

      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
