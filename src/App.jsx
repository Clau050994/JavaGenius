import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";


function App() {
    const imageUrl = 'https://images.unsplash.com/photo-1518655048521-f130df041f66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D';
    const [cardData, setCardData] = useState([
        { question: "Java's programming paradigm?", answer: "Object oriented" },
        { question: "Java's inventor?", answer: "James Gosling" },
        { question: "JDK meaning?", answer: "Java Development Kit" },
        { question: "What's JVM?", answer: "Virtual Machine" },
        { question: "Java wrapper classes?", answer: "Type Encapsulation" },
        { question: "Java interface?", answer: "Abstract Methods" },
        { question: "Meaning of 'static'?", answer: "Class Level" },
        { question: "Define polymorphism?", answer: "Multiple Forms" },
        { question: "Define inheritance?", answer: "Feature Sharing" },
        { question: "'main' method role?", answer: "Program Entry" },
        { question: "Java platform independence?", answer: "Byte Code" },
        { question: "Exception handling keyword?", answer: "Try Catch" },
        { question: "Immutable class example?", answer: "String Class" },
        { question: "Synchronization purpose?", answer: "Thread Safety" },
        { question: "Collection size variable?", answer: "Array Length" },
        { question: "For-each loop keyword?", answer: "Enhanced For" },
        { question: "Interface default method?", answer: "Java 8" }, 
        { question: "Java logical operator?", answer: "And Or" }, 
        { question: "Method overriding?", answer: "Runtime Polymorphism" },
        { question: "Abstract class keyword?", answer: "Abstract Keyword" },
      ]);
      
         const [currentCardIndex, setCurrentCardIndex] = useState(0); 
         const [isFlipped, setIsFlipped] = useState(false);
         const [userAnswer, setUserAnswer] = useState('');
         const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
         const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
         const [currentStreak, setCurrentStreak] = useState(0);
        const [longestStreak, setLongestStreak] = useState(0);
        const [masteredCards, setMasteredCards] = useState([]);



        const handleNextCard = () => {
            
            setIsFlipped(false);
            setIsAnswerCorrect(null); 
            let tempCardIndex = currentCardIndex + 1;
            if (tempCardIndex === cardData.length) {
                tempCardIndex = 0;
            }
            setCurrentCardIndex(tempCardIndex);
        
        };  

        const flipCart = () => {
            if (isAnswerCorrect !== null) {
                setIsFlipped(prevFlipped => !prevFlipped);
              }
        };
       
        const handlePreviousCard = () => {
            if (currentCardIndex > 0) {
                setIsFlipped(false);
                setIsAnswerCorrect(null); 
                setCurrentCardIndex(currentCardIndex - 1);
            }
        };

        const handleShuffle = () => {
            const tempCardData = cardData;
            for (let i = tempCardData.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [tempCardData[i], tempCardData[j]] = [tempCardData[j], tempCardData[i]];
            }
            setCardData(tempCardData);
            setCurrentCardIndex(0);
        };

        const handleCheckAnswer = () =>{
            const correct = userAnswer.trim().toLowerCase() === cardData[currentCardIndex].answer.trim().toLowerCase();
                setIsAnswerCorrect(correct);
                setIsFlipped(true)
                if (correct) {
                    setCorrectAnswersCount(prevCount => prevCount + 1);
                    setCurrentStreak(prevStreak => prevStreak + 1); 
                    setLongestStreak(prevLongest => Math.max(prevLongest, currentStreak + 1));
                    console.log('Correct');
                }
                else {
                    console.log('Incorrect');
                    setCurrentStreak(0);
                }
            setUserAnswer('');
            
        };

        const markAsMastered = (index) => {
            const masteredCard = cardData[index];
            setMasteredCards(prevMastered => [...prevMastered, masteredCard]);
            setIsAnswerCorrect(null);
            setIsFlipped(prevFlipped => !prevFlipped);
            setCardData(prevCards => prevCards.filter((_, cardIndex) => cardIndex !== index));
        };

        return (
            <div style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '100%',
                margin: 0,
            }}>
                <div style={{ height: '100%', justifyContent: 'center', paddingBottom:'20vh', alignItems: 'center' }}>
                    <div className='header-container'>
                        <h1 className='h1-header'>Welcome to JavaGenius!</h1>
                        <h2 className='h2-header'>Do you want to master Java? This is the best place to do it!</h2>
                        <h3 className='h3-header'>Number of Flashcards: 10</h3>
                        <div className='streaks-container'>
                            <p>Current Streak: {currentStreak}</p>
                            <p>Longest Streak: {longestStreak}</p>
                        </div>

                    </div>
                    <div className='cards-container'>
                        <Cards
                            question={cardData[currentCardIndex].question}
                            answer={cardData[currentCardIndex].answer}
                            isFlipped={isFlipped} 
                            handleClick={flipCart} 
                            isAnswerCorrect={isAnswerCorrect}
                            handleMaster={() => markAsMastered(currentCardIndex)}
                        />
                    </div> 
                    <h3 className='h2-header'>Test your knowledge!</h3>
                    <div className="input-container">
                    <input
                        className="input"
                        type="text"
                        placeholder="Type your answer here"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        disabled={isFlipped}
                    />
                    {!isFlipped && (
                        <button className="my-button" onClick={handleCheckAnswer}>Submit Answer</button>
                    )}
                </div>


                    <div className="buttons-container">
                        <button className="my-buttonLeft" onClick={handlePreviousCard}><HiOutlineArrowSmLeft /></button>
                        <button className="my-buttonRight" onClick={handleNextCard}><HiOutlineArrowSmRight /></button>
                        <button className="my-button" onClick={handleShuffle}>Shuffle the cards</button>
                    </div>
                </div>
            </div>
        );
        
}

export default App;
