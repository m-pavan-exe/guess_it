import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardManager = () => {
  const [flashcards, setFlashcards] = useState([
    { front: 'Hola', back: 'Hello', isFlipped: false },
  ]);

  const handleFlip = (index) => {
    const updatedFlashcards = flashcards.map((card, i) =>
      i === index ? { ...card, isFlipped: !card.isFlipped } : card
    );
    setFlashcards(updatedFlashcards);
  };

  return (
    <div>
      {flashcards.map((card, index) => (
        <Flashcard
          key={index}
          front={card.front}
          back={card.back}
          isFlipped={card.isFlipped}
          onFlip={() => handleFlip(index)}
        />
      ))}
    </div>
  );
};

export default FlashcardManager;
