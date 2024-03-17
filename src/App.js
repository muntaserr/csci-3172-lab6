import React, { useState } from 'react';
import './App.css';

function App() {
  const questionsData = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Rome', isCorrect: false },
        { answerText: 'Berlin', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
      ],
    },
    
  ];

  const [userAnswers, setUserAnswers] = useState(new Array(questionsData.length).fill(null));

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[questionIndex] = answerIndex;
    setUserAnswers(newUserAnswers);
  };

  return (
    <div className="App">
      <div className="quiz-container">
        {questionsData.map((question, questionIndex) => (
          <div className="question" key={questionIndex}>
            <h2>{question.questionText}</h2>
            <div className="answer-options">
              {question.answerOptions.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                  className={userAnswers[questionIndex] === optionIndex ? 'selected' : ''}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
            {userAnswers[questionIndex] !== null && (
              <p className={question.answerOptions[userAnswers[questionIndex]].isCorrect ? 'correct' : 'incorrect'}>
                Your answer is {question.answerOptions[userAnswers[questionIndex]].isCorrect ? 'correct' : 'incorrect'}.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
