import './App.css';
import viteLogo from './assets/vite.svg'
import Header from './Header'
import Footer from './Footer'
import GameSession from './GameSession'

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
  {
    text: "Welches Element hat das chemische Symbol 'Au'?",
    answers: ["Silber", "Aluminium", "Gold", "Argon"],
    correctAnswer: "Gold",
  },
];

function App() {

  return (
    <div>
      <Header />
      <img src={viteLogo} className="logo vite" alt="Vite logo" />
      <h1>Willkommen beim WISS-Quiz!</h1>
      <GameSession questions={questions} />

      <Footer />
    </div>
  );
}

export default App;