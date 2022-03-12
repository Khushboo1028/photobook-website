import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { EditFormComponent } from "../EditFormComponent";

const EditPhotoButton = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(true)}>Edit Image</Button>
      <ShowFormToEdit data={data} show={show} onHide={() => setShow(false)} />
    </div>
  );
};

function ShowFormToEdit(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Items!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditFormComponent data={props.data} />
      </Modal.Body>
    </Modal>
  );
}

export default EditPhotoButton;
