import React, { useState } from 'react';
import styles from './Quiz.module.css';

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selections, setSelections] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelections([...selections, answer]);
    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const tally = {};
    selections.forEach((selection) => {
      tally[selection] = (tally[selection] || 0) + 1;
    });
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  if (showResult) {
    const result = calculateResult();
    return (
      <div className={styles.resultContainer}>
        <h2>Your Result: {result}</h2>
        <p>{quizData.results[result]}</p>
      </div>
    );
  }

  const question = quizData.questions[currentQuestion];

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.question}>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={styles.optionButton}
            onClick={() => handleAnswerSelect(option.type)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;