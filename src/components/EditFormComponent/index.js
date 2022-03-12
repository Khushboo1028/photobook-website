import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import axios from "axios";

export const EditFormComponent = ({ data }) => {
  const [photographerName, setPhotographerName] = useState(
    data.metadata.photographerName
  );
  const [location, setLocation] = useState(data.metadata.location);
  const [label, setLabel] = useState(data.label);
  const [uploaded_pic, setUploadedPic] = useState();

  const handlePhotographerName = (event) => {
    setPhotographerName(event.currentTarget.value);
  };

  const handleLabel = (event) => {
    setLabel(event.currentTarget.value);
  };

  const handleLocation = (event) => {
    setLocation(event.currentTarget.value);
    console.log(location);
  };

  // const handleDateClicked = (event) => {
  //   setDateClicked(event.currentTarget.value);
  //   console.log(date_clicked);
  // };

  // const convertDate = (strDate) => {
  //   var datum = Date.parse(strDate);
  //   console.log(datum / 1000);
  //   return datum / 1000;
  // };

  const handlePhotoChange = (event) => {
    setUploadedPic(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      if (uploaded_pic === undefined) {
        var templateParams = {
          photographerName: photographerName,
          location: location,
          label: label,
        };
        console.log(templateParams);

        axios
          .patch(
            "https://photobook-server-khushboo1028.herokuapp.com/files/" +
              data.docId,
            templateParams
          ) //TODO
          .then((response) => {
            console.log(response);

            alert("Succesfully changed fields");
          })
          .catch((error) => {
            alert(error);
            console.log(error);
          });
      } else {
        console.log("we will change the image");
        //before upload change metadata.filename to previous image name

        const formData = new FormData();
        formData.append("file", uploaded_pic);
        formData.append("location", location);
        formData.append("photographerName", photographerName);
        formData.append("filename", data.metadata.filename);
        formData.append("label", label);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        console.log(formData);

        axios
          .post(
            "https://photobook-server-khushboo1028.herokuapp.com/updatePhoto",
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
      }
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Label style={{ fontSize: "1.5rem" }}>
                Change Category
              </Form.Label>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  defaultValue={data.label}
                  onChange={handleLabel}
                  type="text"
                  placeholder="Type animals, flowers, people or others"
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
                  defaultValue={data.metadata.photographerName}
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
                  defaultValue={data.metadata.location}
                  placeholder="E.g. London"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Form.Label style={{ fontSize: "1.5rem" }}>Change Image</Form.Label>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control
              onChange={handlePhotoChange}
              type="file"
              accept="image/gif, image/jpeg, image/png"
            />
          </Form.Group>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
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
        </Row>
      </Container>
    </div>
  );
};
