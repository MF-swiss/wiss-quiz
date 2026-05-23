import { useState, useEffect } from "react";
import GameSession from "../components/GameSession";

const API_URL = import.meta.env.VITE_API_URL;

function Game() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch(`${API_URL}/questions`);
        if (!response.ok) {
          throw new Error("Fragen konnten nicht geladen werden");
        }
        const data = await response.json();
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