import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

/**
 * Settings Modal
 *
 * The purpose of this modal is to allow to user to set the game settings in a simple way.
 *
 * @param props.setdifficulty function to reset the difficutly, from App.jsx
 *
 * @return a full screen modal with game difficutly settings
 */
const SettingsModal = (props) => {
  const [labelValue, setLabelValue] = useState(5);
  const difficultyNames = {
    3: 'very easy',
    4: 'easy',
    5: 'medium',
    6: 'hard',
    7: 'harder',
    8: 'challenging',
    9: 'extreme',
    10: 'nightmare',
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Difficulty: <em>{difficultyNames[labelValue]}</em>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group>
            <p>Number of pairs: {labelValue}</p>
            <Form.Range
              // The range can be set between 3-10, the minimum and maximum allowed pair of cards
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
          type="submit"
          className="px-4 text-uppercase"
          onClick={() => {
            // set the difficulty, and close this modal
            props.setdifficulty(labelValue);
            props.onHide();
          }}
        >
          Start Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
