import viteLogo from './assets/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'

function App() {

  return (

      <div>
        <Header/>
        <p></p>
        <img src={viteLogo} className="logo vite" alt="Vite logo"/>
        <h1>Willkommen beim WISS-Quiz!</h1>
        <p>Hier wird bald unser Quiz starten.</p>
        <Welcome/>
        <button>Hier zur nächsten Frage</button>
        <Footer/>
      </div>
  )
}

export default App;