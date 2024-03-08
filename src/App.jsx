import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";


function App() {
    const imageUrl = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXJuaW5nfGVufDB8fDB8fHww';
    const cardData = [

            { question: "What is Java?", answer: "A high-level, class-based, object-oriented programming language." },
            { question: "Who invented Java?", answer: "James Gosling, at Sun Microsystems." },
            { question: "What does JDK stand for?", answer: "Java Development Kit." },
            { question: "What is the JVM?", answer: "Java Virtual Machine, an abstract machine to run Java programs." },
            { question: "What are wrapper classes in Java?", answer: "Classes that encapsulate primitive types into objects." },
            { question: "What is an interface in Java?", answer: "A reference type in Java, it is similar to class, it is a collection of abstract methods." },
            { question: "What does the 'static' keyword in Java mean?", answer: "Static means that the particular member belongs to a type itself, rather than to an instance of that type." },
            { question: "What is polymorphism in Java?", answer: "Polymorphism is the ability of an object to take on many forms." },
            { question: "What is inheritance in Java?", answer: "The mechanism in Java by which one class is allowed to inherit the features(fields and methods) of another class." },
            { question: "Explain 'public static void main(String[] args)' in Java.", answer: "It's the entry point for any Java program." }
         ]
         const [currentCardIndex, setCurrentCardIndex] = useState(0); 
         const [isFlipped, setIsFlipped] = useState(false);

        const handleNextCard = () => {
            setIsFlipped(false);
            const tempCardIndex = currentCardIndex + 1;
            setCurrentCardIndex(tempCardIndex);        
        };  

        const flipCart = () => {
            const tempFlipped = isFlipped;
            console.log(!tempFlipped);
            setIsFlipped(!tempFlipped);
        }
       
       const handlePreviousCard = () => {
        if (!isFlipped && currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
          }
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
                    </div>
                    <div className='cards-container'>
                        <Cards
                            question={cardData[currentCardIndex].question}
                            answer={cardData[currentCardIndex].answer}
                            isFlipped={isFlipped} 
                            handleClick={flipCart} 
                        />
                        <div className="buttons-container">
                            <button className="my-buttonLeft" onClick={handlePreviousCard}><HiOutlineArrowSmLeft /></button>
                            <button className="my-buttonRight" onClick={handleNextCard}><HiOutlineArrowSmRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        );

    
}
    
    export default App;
  