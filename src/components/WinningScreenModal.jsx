import React from 'react';
import { Button, Modal } from 'react-bootstrap';

/**
 * End game modal
 *
 * @param props.showsettings function to pull up the settings modal menu
 * @param props.setdifficulty funcition to reset the difficulty to null
 * @param props.score an integer value of the end game score
 *
 * @returns a modal when the user finished the game
 */
const WinningScreenModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Nicely done!
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        You finished the game in <em> {props.score}</em> steps.
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="secondary"
          type="submit"
          onClick={() => {
            // returns the user to the home screen
            props.setdifficulty(null);
            props.onHide();
          }}
        >
          Home Screen
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={() => {
            // closes this modal, and shows the new game difficulty settings modal
            props.setdifficulty(null);
            props.onHide();
            props.showsettings(true);
          }}
        >
          Start a new Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WinningScreenModal;
