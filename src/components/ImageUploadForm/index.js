import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

const ImageUploadForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Label style={{ fontSize: "1.5rem" }}>
                Upload an image
              </Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontSize: "1.5rem" }}>
                  Who clicked this image?
                </Form.Label>
                <Form.Control type="text" placeholder="E.g. Khushboo Gandhi" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontSize: "1.5rem" }}>
                  Where did you click this image?
                </Form.Label>
                <Form.Control type="text" placeholder="E.g. London" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontSize: "1.5rem" }}>
                  When did you click this photo?
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageUploadForm;
