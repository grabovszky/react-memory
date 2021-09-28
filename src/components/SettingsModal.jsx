import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const SettingsModal = (props) => {
  const [labelValue, setLabelValue] = useState(5);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Start a new Game
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <h4>Select the number of pairs</h4>
            <Form.Label>{labelValue}</Form.Label>
            <Form.Range
              min={3}
              max={10}
              value={labelValue}
              onChange={(e) => setLabelValue(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            props.getDifficulty(labelValue);
            props.onHide();
          }}
        >
          Start
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
