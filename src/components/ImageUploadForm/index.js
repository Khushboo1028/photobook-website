import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

const ImageUploadForm = () => {
  const [photographer_name, setPhotographerName] = useState("");
  const [location, setLocation] = useState("");
  const [uploaded_pic, setUploadedPic] = useState();

  const handlePhotoUpload = (event) => {
    setUploadedPic(event.target.files[0]);
    console.log(event.target.files[0]);
  };

  const handlePhotographerName = (event) => {
    setPhotographerName(event.currentTarget.value);
  };

  const handleLocation = (event) => {
    setLocation(event.currentTarget.value);
    console.log(location);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append("file", uploaded_pic);
      formData.append("location", location);
      formData.append("photographerName", photographer_name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      axios
        .post(
          "https://photobook-server-khushboo1028.herokuapp.com/upload",
          formData,
          config
        )
        .then((response) => {
          console.log(response);

          alert("Succesfully uploaded image");
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });

      event.preventDefault();
    }
  };

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
                  onChange={handlePhotoUpload}
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
                <Form.Control
                  type="text"
                  placeholder="E.g. Khushboo Gandhi"
                  onChange={handlePhotographerName}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label style={{ fontSize: "1.5rem" }}>
                  Where did you click this image?
                </Form.Label>
                <Form.Control
                  onChange={handleLocation}
                  type="text"
                  placeholder="E.g. London"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{ width: "auto" }}
              variant="success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ImageUploadForm;
