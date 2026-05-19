import './App.css';
import viteLogo from './assets/vite.svg'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import { useState } from 'react'

const question = {
  text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
  answers: ["Alfa", "Bravo", "Charlie"],
  correctAnswer: "Alfa"
};

function App() {
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    setIsAnswered(true);
    if (selectedAnswer === question.correctAnswer) {
      setFeedback("Richtig! 🎉");
      setScore(score + 1);
    } else {
      setFeedback(`Falsch! Die richtige Antwort wäre: ${question.correctAnswer}`);
    }
  };

  return (
    <div>
      <Header />
      <img src={viteLogo} className="logo vite" alt="Vite logo" />
      <h1>Willkommen beim WISS-Quiz!</h1>

      <p>Punkte: {score}</p>
      <h2>{question.text}</h2>
      <div>
        {question.answers.map((answer) => (
          <Button
            key={answer}
            text={answer}
            onClick={() => handleAnswerClick(answer)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {feedback && <p>{feedback}</p>}

      <Footer />
    </div>
  );
}

export default App;