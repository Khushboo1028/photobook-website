import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import animalsPic from "../../images/animals.jpeg";
import flowersPic from "../../images/flowers.jpeg";
import peoplePic from "../../images/people.jpeg";
import othersPic from "../../images/others.jpeg";
import { useHistory } from "react-router-dom";

const PhotoCategories = () => {
  let history = useHistory();

  const redirectToOthers = () => {
    history.push("/my-photobook/others");
  };

  const redirectToPeople = () => {
    history.push("/my-photobook/people");
  };

  const redirectToAnimals = () => {
    history.push("/my-photobook/animals");
  };

  const redirectToFlowers = () => {
    history.push("/my-photobook/flowers");
  };

  return (
    <div>
      <Container style={{ margin: "auto", width: "50%" }}>
        <Row style={{ marginBottom: "2rem" }}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={animalsPic} />
              <Card.Body>
                <Card.Title>Animals</Card.Title>

                <Button
                  style={{ textAlign: "center" }}
                  onClick={redirectToAnimals}
                  variant="primary"
                >
                  Click me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={flowersPic} />
              <Card.Body>
                <Card.Title>Flowers</Card.Title>

                <Button
                  style={{ textAlign: "center" }}
                  onClick={redirectToFlowers}
                  variant="primary"
                >
                  Click me
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={peoplePic} />
              <Card.Body>
                <Card.Title>People</Card.Title>

                <Button
                  style={{ textAlign: "center" }}
                  onClick={redirectToPeople}
                  variant="primary"
                >
                  Click me
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={othersPic} />
              <Card.Body>
                <Card.Title>Others</Card.Title>

                <Button
                  style={{ textAlign: "center" }}
                  variant="primary"
                  onClick={redirectToOthers}
                >
                  Click me
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhotoCategories;
