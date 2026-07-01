const API_URL = import.meta.env.VITE_API_URL;

export async function getAllQuestions() {
  const response = await fetch(`${API_URL}/questions`);
  if (!response.ok) {
    throw new Error("Fragen konnten nicht geladen werden");
  }
  return response.json();
}

export async function getQuestionsByCategory(category) {
  const response = await fetch(
    `${API_URL}/questions/category/${encodeURIComponent(category)}`,
  );
  if (!response.ok) {
    throw new Error("Fragen konnten nicht geladen werden");
  }
  return response.json();
}

export async function getRandomQuestions(count = 5) {
  const response = await fetch(`${API_URL}/questions/random?count=${count}`);
  if (!response.ok) {
    throw new Error("Fragen konnten nicht geladen werden");
  }
  return response.json();
}

export async function deleteQuestion(id) {
  const response = await fetch(`${API_URL}/questions/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Frage konnte nicht gelöscht werden");
  }
}

export async function createQuestion(question) {
  const response = await fetch(`${API_URL}/questions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  });
  if (!response.ok) {
    throw new Error("Frage konnte nicht gespeichert werden");
  }
  return response.json();
}

export async function updateQuestion(id, question) {
  const response = await fetch(`${API_URL}/questions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  });
  if (!response.ok) {
    throw new Error("Frage konnte nicht aktualisiert werden");
  }
  return response.json();
}