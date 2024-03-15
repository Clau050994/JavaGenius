import React from 'react';
import './cards.css';

function Cards({ question, answer, isFlipped, handleClick, handleMaster, isAnswerCorrect }) {
  const feedbackStyle = isAnswerCorrect ? { borderColor: 'green' } : { borderColor: 'red' };

  return (
    <div className="card" onClick={handleClick}>
      {isFlipped ? (
        <div className='cardBody'>
          <div style={isAnswerCorrect !== null ? feedbackStyle : {}}>
            <p>{answer}</p>
            {isAnswerCorrect !== null && (
              <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect!'}</p>
            )}
          </div>
          {/* Adding a Mastered button */}
          <button 
            className="mastered-button" 
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from triggering the card's onClick event
              handleMaster();
            }}
          >
            Mastered
          </button>
        </div>
      ) : (
        <div>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
}

export default Cards;

