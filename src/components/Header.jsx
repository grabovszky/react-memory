import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';

/**
 * Header navbar component
 *
 * @param {boolean} props.isplaying true if the game is in play
 * @param props.setdifficulty function to reset the difficulty to start a new game
 * @param props.showsettings function to show the settings modal
 *
 * @returns the navbar
 */
const Header = (props) => {
  return (
    <Navbar bg="dark" className="shadow">
      <Container>
        <Navbar.Brand href="#home" onClick={() => props.setdifficulty(null)}>
          <img
            src="/images/evista.png"
            width="110"
            height="38"
            className="d-inline-block align-top"
            alt="Evista"
          />
        </Navbar.Brand>
        {props.isplaying ? (
          // only show the button if the player is currnetly playing a game
          <Button
            variant="primary"
            className="px-4"
            onClick={() => {
              props.setdifficulty(null);
              props.showsettings(true);
            }}
          >
            Start new Game
          </Button>
        ) : null}
      </Container>
    </Navbar>
  );
};

export default Header;
