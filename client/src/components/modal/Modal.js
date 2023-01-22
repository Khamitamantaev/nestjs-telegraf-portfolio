import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SimpleModal = ({ submitButtonText, headingText, questionText, handleSubmit, show, handleClose }) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{headingText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{questionText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SimpleModal