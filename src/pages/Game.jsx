import { useState, useEffect } from "react";
import GameSession from "../components/GameSession";
import { getAllQuestions } from "../api/questions";

function Game() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const data = await getAllQuestions();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadQuestions();
  }, []);


  if (isLoading) {
    return (
      <div>
        <h2>Quiz</h2>
        <p>Lade Fragen...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Quiz</h2>
        <p>Fehler: {error}</p>
        <button onClick={() => window.location.reload()}>
          Erneut versuchen
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz</h2>
      <GameSession questions={questions} />
    </div>
  );
}

export default Game;