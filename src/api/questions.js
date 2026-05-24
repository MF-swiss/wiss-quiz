export async function deleteQuestion(id) {
  const response = await fetch(`${API_URL}/questions/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Frage konnte nicht gelöscht werden");
  }
}