import React from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';

/**
 * Index screen component
 *
 * @param props.showsettings function to show the difficulty settings modal
 *
 * @returns a front screen hero section
 */
const Hero = (props) => {
  return (
    <Container className="mt-5 pt-5 text-center">
      <div className="text-center my-5">
        <figure>
          <blockquote className="blockquote mb-4">
            <h1 className="display-4">Splendex Memory</h1>
          </blockquote>
          <figcaption className="blockquote-footer">
            A simple memory game, backed by{' '}
            <em className="text-primary">React.js</em>
          </figcaption>
        </figure>
      </div>

      <div className="text-center">
        <Button
          className="btn-lg m-5 px-5 text-uppercase"
          variant="primary"
          onClick={() => props.showsettings(true)}
        >
          Start new Game
        </Button>
      </div>

      <Accordion flush className="mt-5 mx-3 text-start">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Rules</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>
                The objective is to collect <em>all</em> pairs of cards, in the{' '}
                <em>least</em> possible steps.
              </li>
              <li>
                The player can choose how many pairs they would like to play
                with.
              </li>
              <li>
                The cards are <em>shuffeled</em> and put down on the game board,
                faceing down.
              </li>
              <li>
                On each turn, the player turns over <em>any two cards</em> (one
                at a time).
              </li>
              <li>
                If they <em>succesfully</em> match a pair they get to keep the
                cards.
              </li>
              <li>
                When a player turns over two cards that do <strong>not</strong>{' '}
                match, those cards are turned face down again (in the same
                position).
              </li>
              <li>
                The trick is to <strong>remember</strong> which cards are where.
              </li>
              <li>
                The score is the number of steps it took the player to finish
                the game, the less the better.
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Hero;
