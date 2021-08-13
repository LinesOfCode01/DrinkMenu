import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Row, Col, Form } from 'react-bootstrap';

function PopUp() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>     
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          It is unlawful for any person under 21 years of age to purchase or
          attempt to purchase alcoholic beverages!{' '}
          <p>
            <b>Are you over 21 years old</b>?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="primary" onClick={handleClose}>
            YES
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
