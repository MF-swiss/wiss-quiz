import GameSession from "../components/GameSession";


const questions = [
  {
    text: "Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?",
    answers: ["Alfa", "Bravo", "Charlie", "Delta"],
    correctAnswer: "Alfa",
  },
  {
    text: "Wie heisst die Hauptfigur in 'The Legend of Zelda'?",
    answers: ["Zelda", "Link", "Ganon", "Impa"],
    correctAnswer: "Link",
  },
  // Fügt hier eure Fragen ein
];


function Game() {
  return (
    <div>
      <h1>Quiz</h1>
      <GameSession questions={questions} />
    </div>
  );
}

export default Game;