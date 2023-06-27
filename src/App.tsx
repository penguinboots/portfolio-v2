import { useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Placeholder from "./components/Placeholder";
import Menu from "./components/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Menu menuOpen={menuOpen} />
      <Placeholder />
    </div>
  );
}

export default App;
