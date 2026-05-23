import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="App-nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to="/regeln">Regeln</NavLink>
      <NavLink to="/impressum">Impressum</NavLink>
    </nav>
  );
}

export default Navigation;