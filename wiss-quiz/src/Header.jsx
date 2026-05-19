import wiss_logo from './assets/wiss_logo.png'

function Header() {
  return (
    <div>
        <img src={wiss_logo} className="logo" alt="WISS Logo" />
        <h1><strong>WISS-Quiz</strong></h1>
    </div>
  );
}

export default Header;