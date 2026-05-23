import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import Impressum from "./pages/Impressum";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Game />} />
        <Route path="regeln" element={<Rules />} />
        <Route path="impressum" element={<Impressum />} />
      </Route>
    </Routes>
  );
}

export default App;

