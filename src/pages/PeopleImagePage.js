import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import EditPhotoButton from "../components/EditPhotoButton";
import { ViewImageButton } from "../components/ViewImageButton";
import axios from "axios";

const PeopleImagePage = () => {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    firebase.initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
    });
    let db = firebase.firestore();

    db.collection("pictures")
      .orderBy("created", "desc")
      .get()
      .then((querySnapshot) => {
        setImageArray([]);
        querySnapshot.forEach((doc) => {
          setImageArray((e) => [...e, doc.data()]);
          console.log(imageArray);
        });
      });
    // eslint-disable-next-line
  }, []);

  const deleteImage = (docId) => {
    let url =
      "https://photobook-server-khushboo1028.herokuapp.com/files/" + docId;
    console.log(url);
    axios
      .delete(url, { mode: "Cors" })
      .then((response) => {
        console.log(response);

        alert("Successfully deleted image");
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };
  const getDate = (unix_timestamp) => {
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var formattedDate =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    console.log(formattedDate);
    return formattedDate + " " + formattedTime;
  };

  const peoplePics = imageArray.filter((e) => e.label === "people");
  const listItems = peoplePics.map((item) => (
    <div>
      <Row style={{ padding: "2rem", border: "2px" }}>
        <Col style={{ margin: "auto", width: "50%" }}>
          <Container>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.url} />
            </Card>
          </Container>
        </Col>
        <Col style={{ margin: "auto", width: "50%" }}>
          <div>
            <h6>Photographer: {item.metadata.photographerName}</h6>
            <h6>Location: {item.metadata.location}</h6>
            <h6>Date: {getDate(item.created.seconds)}</h6>
            <br />
          </div>
        </Col>

        <Col style={{ margin: "auto", width: "50%" }}>
          <Row>
            <ViewImageButton url={item.url} />
          </Row>
          <Row>
            <br></br>
          </Row>
          <Row>
            <EditPhotoButton data={item} />
          </Row>
          <Row>
            <br></br>
          </Row>
          <Row>
            <Button
              onClick={() => {
                deleteImage(item.docId);
              }}
              variant="danger"
              style={{ width: "auto" }}
            >
              Delete Image
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  ));

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>View all People pictures here!</h1>
      <div style={{ padding: "3rem" }}>{listItems}</div>
    </div>
  );
};

export default PeopleImagePage;
