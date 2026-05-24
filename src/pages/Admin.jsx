import { useState, useEffect } from "react";
import { getAllQuestions, deleteQuestion } from "../api/questions";

function Admin() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllQuestions();
      setQuestions(data);
    }

    async function handleDelete(id) {
        await deleteQuestion(id);
        setQuestions((prev) => prev.filter((q) => q.id !== id));
    }

    function handleAnswerChange(index, value) {
        setAnswers((prev) => {
            const next = [...prev];  // Kopie erstellen
            next[index] = value;     // Element ändern
            return next;             // neues Array zurückgeben
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submit:", { text });
    }
    load();
  }, []);

return (
  <div>
    <h1>Admin-Bereich</h1>
    <h2>Neue Frage hinzufügen</h2>
    <form onSubmit={handleSubmit}>
    <div>
       <div>
            <label>
                Kategorie:
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
                <option>Geographie</option>
                <option>Geschichte</option>
                <option>Sport</option>
                <option>Allgemeinwissen</option>
                </select>
            </label>
            </div>

            <div>
            <label>
                Schwierigkeit:
                <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                >
                <option value="leicht">leicht</option>
                <option value="mittel">mittel</option>
                <option value="schwer">schwer</option>
                </select>
            </label>
    </div>

    <button type="submit">Frage hinzufügen</button>
    </form>
);

export default Admin;