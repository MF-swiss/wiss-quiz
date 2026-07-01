import { useState } from "react";
import GameSession from "../components/GameSession";
import Button from "../components/Button";
import { getQuestionsByCategory, getRandomQuestions } from "../api/questions";

const CATEGORIES = ["Geographie", "Geschichte", "Sport", "Technologie"];

function Game() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCategorySelect(category) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getQuestionsByCategory(category);
      setSelectedCategory(category);
      setQuestions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleRandomCategorySelect() {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getRandomQuestions();
      setSelectedCategory("Zufällige Kategorie");
      setQuestions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleReset() {
    setSelectedCategory(null);
    setQuestions([]);
    setError(null);
  }

  if (isLoading) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Lade Fragen...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Quiz</h1>
        <p>Fehler: {error}</p>
        <Button text="Zurück" onClick={handleReset} />
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div>
        <h1>Quiz</h1>
        <h2>Wähle eine Kategorie</h2>
        <div>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              text={category}
              onClick={() => handleCategorySelect(category)}
            />
          ))}
          <Button
            key={"Zufällige Kategorie"}
            text={"Zufällige Kategorie"}
            onClick={() => handleRandomCategorySelect()}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz – {selectedCategory}</h1>
      <GameSession questions={questions} onReset={handleReset} />
    </div>
  );
}

export default Game;
