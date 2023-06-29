import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Landing from "./components/Landing";

import stars from "./assets/stars.png";
import moon from "./assets/moon.png";
import mountainFront from "./assets/mountains_front.png";
import mountainBack from "./assets/mountains_behind.png";
import welcome from "./assets/welcome.svg";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import WhyYou from "./components/WhyYou";
import WhyMe from "./components/WhyMe";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const images = [stars, moon, mountainFront, mountainBack, welcome];

    const imagePromises = images.map((imageUrl) => {
      return new Promise<void>((resolve) => {
        if (typeof imageUrl === "string") {
          const img = new Image();
          img.onload = () => resolve();
          img.src = imageUrl;
        } else {
          const svgUrl = URL.createObjectURL(imageUrl);
          const img = new Image();
          img.onload = () => {
            URL.revokeObjectURL(svgUrl);
            resolve();
          };
          img.src = svgUrl;
        }
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
      <Intro />
      <About />
      <Projects />
      <WhyYou />
      <WhyMe />
    </div>
  );
}

export default App;
