import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Trash2Fill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from "../redux/actions";

const Favourites = () => {
  const favouriteElements = useSelector((state) => state.preferiti.content);
  const jobsArray = useSelector((state) => state.jobs.content);

  const dispatch = useDispatch();
  return (
    <Container>
      <Link to="/">
        <Button className="mt-3">Go Back</Button>
      </Link>

      <Row className="d-flex justify-content-center mt-5">
        <h1 className="display-1 text-center">Your favourites</h1>
        <Col xs={6}>
          <ListGroup>
            {favouriteElements.map((preferito, index) => (
              <ListGroup.Item className="d-flex justify-content-between" key={index}>
                <Link to={`/${preferito}`}>{preferito}</Link>
                <div
                  className="btn btn-outline-danger"
                  onClick={() => {
                    dispatch(removeFavourite(index));
                  }}
                >
                  <Trash2Fill />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
