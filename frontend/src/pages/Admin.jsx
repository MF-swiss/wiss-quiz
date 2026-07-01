import { useEffect, useState } from "react";
import { deleteQuestion, getAllQuestions } from "../api/questions";

function Admin() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllQuestions();
        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  async function handleDelete(id) {
    try {
        await deleteQuestion(id);
        setQuestions((prev) => prev.filter((q) => q.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  if (isLoading) {
    return (
      <div>
        <h1>Admin-Bereich</h1>
        <p>Lade Fragen...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin-Bereich</h1>

      {error && <p>Fehler: {error}</p>}

      <h2>Fragen verwalten</h2>
      {questions.length === 0 ? (
        <p>Keine Fragen vorhanden.</p>
      ) : (
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              <strong>{question.text}</strong>
              <button type="button" onClick={() => handleDelete(question.id)}>
                Löschen
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Admin;