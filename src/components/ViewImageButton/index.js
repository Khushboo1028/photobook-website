import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export const ViewImageButton = ({ url }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow(true)}>View Image</Button>
      <ShowFormToEdit url={url} show={show} onHide={() => setShow(false)} />
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
      <img src={props.url} alt="filename" />

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
