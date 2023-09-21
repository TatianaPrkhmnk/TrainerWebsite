import React from "react";
import { Modal, Button } from "react-bootstrap";

function MyModal({ showModal, onCloseModal }) {
  return (
<Modal show={showModal} onHide={onCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This is the modal content.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={onCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

  )
}
export default MyModal;