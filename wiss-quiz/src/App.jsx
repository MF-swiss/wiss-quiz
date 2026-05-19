import viteLogo from './assets/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'
import Questions from './Questions'
import Counter from './Counter'

function App() {

  return (

      <div>
        <Header/>
        <p></p>
        <img src={viteLogo} className="logo vite" alt="Vite logo"/>
        <h1>Willkommen beim WISS-Quiz!</h1>
        <p>Hier starten wir mit unserem Quiz.</p>
        <Welcome/>
        <Questions/>
        <Counter titel="Punktestand" startwert={0} schritt={1} max={99} />
        <Counter titel="Lebenspunkte" startwert={100} schritt={50} max={300} />
        <Footer/>
      </div>
  )
}

export default App;