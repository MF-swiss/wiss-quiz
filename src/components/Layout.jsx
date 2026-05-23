import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>(c) {new Date().getFullYear()} WISS-Quiz</p>
      </footer>
    </div>
  );
}

export default Layout;

