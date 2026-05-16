import viteLogo from './assets/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'
import Questions from './Questions'
import Counter1 from './Counter1'

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
        <Counter1/>
        <Counter1/>
        <Footer/>
      </div>
  )
}

export default App;