function QuestionForm({
  text,
  setText,
  category,
  setCategory,
  difficulty,
  setDifficulty,
  answers,
  correctIndex,
  setCorrectIndex,
  formError,
  isSubmitting,
  editingId,
  onSubmit,
  onCancel,
  onAnswerChange,
}) {
  return (
    <>
      <h2>{editingId ? "Frage bearbeiten" : "Neue Frage hinzufügen"}</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Fragetext:
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>

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
              <option>Technologie</option>
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

        <div>
          <p>Antworten (richtige bitte markieren):</p>
          {answers.map((answer, index) => (
            <div key={index}>
              <input
                type="text"
                value={answer}
                onChange={(e) => onAnswerChange(index, e.target.value)}
                placeholder={`Antwort ${index + 1}`}
              />
              <input
                type="radio"
                name="correctAnswer"
                checked={correctIndex === index}
                onChange={() => setCorrectIndex(index)}
              />
            </div>
          ))}
        </div>

        {formError && <p style={{ color: "red" }}>{formError}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Speichern..."
            : editingId
              ? "Frage aktualisieren"
              : "Frage hinzufügen"}
        </button>
        {editingId && (
          <button type="button" onClick={onCancel}>
            Abbrechen
          </button>
        )}
      </form>
    </>
  );
}

export default QuestionForm;
