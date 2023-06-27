import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Placeholder from "./components/Placeholder";
import Menu from "./components/Menu";
import Landing from "./components/Landing";

import stars from "./assets/stars.png";
import moon from "./assets/moon.png";
import mountainFront from "./assets/mountains_front.png";
import mountainBack from "./assets/mountains_behind.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const images = [stars, moon, mountainFront, mountainBack];

    const imagePromises = images.map((imageUrl) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = imageUrl;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="app-wrapper">
      {isLoading && <Landing />}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Menu menuOpen={menuOpen} />
      <Placeholder />
    </div>
  );
}

export default App;
