
import Button from './Button';
import { useState } from 'react';

function GameSession({ questions }) {
  const [showScore, setShowScore] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = questions[questionIndex];
  const isLastQuestion = questionIndex === questions.length - 1;

  const handleAnswerClick = (selectedAnswer) => {
    setIsAnswered(true);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setFeedback("Richtig! 🎉");
      setScore((prev) => prev + 1);
    } else {
      setFeedback(`Falsch! Die richtige Antwort wäre: ${currentQuestion.correctAnswer}`);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowScore(true);
      return;
    }

    setQuestionIndex((prev) => prev + 1);
    setFeedback(null);
    setIsAnswered(false);
  };

  if (showScore) {
    return (
      <div>
        <h2>Spiel beendet!</h2>
        <p>Du hast {score} von {questions.length} richtig.</p>
      </div>
    );
  }

  function resetGame() {
  setQuestionIndex(0);
  setFeedback(null);
  setScore(0);
  setIsAnswered(false);
  setShowScore(false);
  }

  return (
    <div>
      <p>Punkte: {score}</p>
      <h2>{currentQuestion.text}</h2>

    <div>
      {currentQuestion.answers.map((answer) => (
        <Button
          key={answer}
          text={answer}
          onClick={() => handleAnswerClick(answer)}
          disabled={isAnswered}
        />
      ))}

      <Button onClick={resetGame} text="Neues Spiel" />
      
      
    </div>


      {feedback && <p>{feedback}</p>}

      {isAnswered && (
        <Button
          text={isLastQuestion ? "Spiel beenden" : "Weiter"}
          onClick={handleNext}
        />
      )}
    </div>
  );
}

export default GameSession;
