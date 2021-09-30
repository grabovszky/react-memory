import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';

import Card from './Card';

/**
 * The Game logic file
 *
 * @param props.difficulty the number of pair of cards
 * @param props.setdifficulty function to reset the game
 * @param props.setscore an integer to hold the current game score
 *
 * @returns a game board
 */
const Game = (props) => {
  const [cards, setCards] = useState([]); // array of current playing cards
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]); // stores the currently flipped cards indexes
  const [highScore, setHighScore] = useState(0);

  /**
   * Creates a new array of card objects, and shuffles is a random order
   */
  useEffect(() => {
    const newCards = [];

    const imgs = [
      'angular',
      'd3',
      'jenkins',
      'postcss',
      'react',
      'redux',
      'sass',
      'ts',
      'vue',
      'webpack',
    ];

    // create pairs with the same img
    for (let i = 0; i < props.difficulty; i++) {
      const cardOne = {
        id: 2 * i,
        img: imgs[i],
        flipped: false,
      };

      const cardTwo = {
        id: 2 * i + 1,
        img: imgs[i],
        flipped: false,
      };

      newCards.push(cardOne);
      newCards.push(cardTwo);
    }

    const shuffledCards = newCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [props.difficulty]);

  /**
   * Checks if the game is finished, and if it is show the winnig screen
   */
  useEffect(() => {
    // checks if no card remained unflipped and we need to check for the length so it doesn't trigger on an empty game
    if (!cards.some((card) => !card.flipped) && cards.length > 0) {
      // the score is calculated by the steps taken to finish the game
      const score = Math.floor(flippedCount / 2);

      // if the current score is smaller than the all time high score or there is no high score, save a new high score to a local file
      if (score < highScore || highScore === 0) {
        setHighScore(score);
        const json = JSON.stringify(score);
        localStorage.setItem('memorygamehighscore', json);
      }

      props.setscore(score);
      setTimeout(() => {
        // show the winning screen to the user
        props.showwinningscreen(true);
      }, 500);
    }
  }, [props, flippedCount, cards, highScore]);

  /**
   * Handles the pair match
   *
   * Checks if two cards have been flipped, and if yes determines if it is a pair or not
   */
  if (flippedIndexes.length === 2) {
    // mathc the cards based on their identifing name
    if (cards[flippedIndexes[0]].img === cards[flippedIndexes[1]].img) {
      // if the cards match copy the cards to a new array, this will prevent the re flipping of the matched cards
      const newGame = [...cards];

      // stay flipped
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setCards(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      // if the cards didn't match  we trigger the re flipping of the cards
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  return (
    <Container className="p-3">
      <div className="mb-5 d-flex justify-content-between">
        <div>
          <span className="text-subtle text-small">Current tries:</span>{' '}
          <span className="text-white">4</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span className="text-subtle text-small">Best:</span>{' '}
          <span className="text-white text-large">2</span>
        </div>
        <div className="">
          <Button
            className="px-4"
            variant="secondary"
            onClick={() => {
              // resets the game board, to a new game with the same difficulty
              const previousDifficulty = props.difficulty;
              props.setdifficulty(null);
              setTimeout(() => {
                props.setdifficulty(previousDifficulty);
              }, 5);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
      <div
        id="board"
        className="d-flex justify-content-center align-items-center"
      >
        {cards.map((card, index) => (
          // Create a div for each card and map a Card component to each
          <div className={'card shadow-sm p-3'} key={index}>
            <Card
              id={index}
              img={card.img}
              cards={cards}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Game;
