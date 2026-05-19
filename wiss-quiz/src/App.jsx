import './App.css';
import viteLogo from './assets/vite.svg'
import Header from './Header'
import Footer from './Footer'
import GameSession from './GameSession'


function App() {

  return (
    <div>
      <Header />
      <img src={viteLogo} className="logo vite" alt="Vite logo" />
      <h1>Willkommen beim WISS-Quiz!</h1>
      <GameSession />

      <Footer />
    </div>
  );
}

export default App;