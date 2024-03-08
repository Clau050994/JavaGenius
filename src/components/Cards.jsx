import React, { useState } from 'react';
import './cards.css';


function Cards({ question, answer, isFlipped, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      {isFlipped ? answer : question}
    </div>
  );
}



export default Cards;

