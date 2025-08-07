import React from 'react';

const Flashcard = ({ front, back, isFlipped, onFlip }) => {
  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default Flashcard;
