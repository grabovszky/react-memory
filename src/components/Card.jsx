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
    // reset flip
  }, [props, flipped]);

  /**
   * Checks if the card can be flipped or not and act accordingly
   */
  const onCardClick = () => {
    // can click
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
