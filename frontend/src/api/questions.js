const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080/api";

export async function getAllQuestions() {
  const response = await fetch(`${API_URL}/questions`);

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