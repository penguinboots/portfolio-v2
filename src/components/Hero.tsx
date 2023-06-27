import React, { useEffect } from "react";
import stars from "../assets/stars.png";
import moon from "../assets/moon.png";
import mountainFront from "../assets/mountains_front.png";
import mountainBack from "../assets/mountains_behind.png";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const parallaxLayers = document.querySelectorAll(".parallax-layer");

      for (let i = 0; i < parallaxLayers.length; i++) {
        const layer = parallaxLayers[i];
        const depth = parseFloat(layer.getAttribute("parallax-depth"));

        if (layer.classList.contains("stars")) {
          const translateValue = scrollTop * depth;
          const rotateValue = translateValue * -0.8; // vertical height
          layer.style.transform = `translateY(${translateValue}px) rotate(${rotateValue}deg)`;
        } else {
          const translateValue = scrollTop * depth;
          layer.style.transform = `translate3d(0, ${translateValue}px, 0)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax-layer stars" parallax-depth="0.1">
        <img src={stars} alt="stars" />
      </div>
      <div className="parallax-layer moon" parallax-depth="1">
        <img src={moon} alt="moon" />
      </div>
      <div className="parallax-layer" parallax-depth="0.4">
        <img src={mountainBack} alt="mountain back" />
      </div>
      <div className="parallax-layer" parallax-depth="0">
        <img src={mountainFront} alt="mountain front" />
      </div>
    </div>
  );
}
