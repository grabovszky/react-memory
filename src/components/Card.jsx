import React, { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

/**
 * A single Card component
 *
 * @param props.id the card identifier
 * @param props.img unique with the pair, the name of the card, used also for getting the img
 * @param props.cards array of card objects
 * @param props.flippedCount number of times the user flipped
 * @param props.flippedIndexes array of the flipped cards indexes
 *
 * @returns a card flipped or unflipped
 */
const Card = (props) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateZ(${flipped ? 180 : 0}deg)`,
  });

  /**
   * Manages the card flip reset
   */
  useEffect(() => {
    if (
      props.flippedIndexes[2] === true &&
      props.flippedIndexes.indexOf(props.id) > -1
    ) {
      // two cards are flipped and they don't match flip them back after 1s
      props.setFlippedIndexes([]);
      setTimeout(() => {
        setFlipped(!flipped);
      }, 1000);
    } else if (props.flippedIndexes[2] === false && props.id === 0) {
      props.setFlippedIndexes([]);
    }
  }, [props, flipped]);

  /**
   * Checks if the card can be flipped or not and act accordingly
   */
  const onCardClick = () => {
    // checks if the card is not yet
    if (!props.cards[props.id].flipped) {
      if (props.flippedCount % 2 === 0) {
        // an opening flip
        flip();
      } else if (
        props.flippedCount % 2 === 1 &&
        props.flippedIndexes.indexOf(props.id) < 0
      ) {
        // a second flip and it is not the first flipped card
        flip();
      }
    }
  };

  /**
   * Flips the card, by changing the flip state, and adds the card to the flipped indexes array
   */
  const flip = () => {
    setFlipped(!flipped);
    props.setFlippedCount(props.flippedCount + 1);
    const newIndexes = [...props.flippedIndexes];
    newIndexes.push(props.id);
    props.setFlippedIndexes(newIndexes);
  };

  return (
    // a card has two divs, one for the front, one for the back
    <div onClick={onCardClick}>
      <animated.div
        className="card-img"
        style={{
          opacity: opacity.to((e) => 1 - e),
          transform,
        }}
      />
      <animated.div
        className="card-img"
        style={{
          opacity,
          transform: transform.to((e) => `${e} rotateZ(180deg)`),
          backgroundImage: `url("/images/cards/${props.img}.png")`,
        }}
      />
    </div>
  );
};

export default Card;
