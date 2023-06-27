import { useEffect, useRef } from "react";
import stars from "../assets/stars.png";
import moon from "../assets/moon.png";
import mountainFront from "../assets/mountains_front.png";
import mountainBack from "../assets/mountains_behind.png";

export default function Hero() {
  const parallaxLayersRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    parallaxLayersRef.current = document.querySelectorAll(".parallax-layer");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (parallaxLayersRef.current) {
        for (let i = 0; i < parallaxLayersRef.current.length; i++) {
          const layer = parallaxLayersRef.current[i];
          const depth = parseFloat(
            layer.getAttribute("parallax-depth") as string
          );

          if (layer.classList.contains("stars")) {
            const translateValue = scrollTop * depth;
            const rotateValue = translateValue * -0.4; // vertical height
            layer.style.transform = `translateY(${translateValue}px) rotate(${rotateValue}deg)`;
          } else if (layer.classList.contains("hello")) {
            const translateValue = scrollTop * depth;
            const translateXValue = translateValue * -0.4; // horizontal movement
            layer.style.transform = `translate3d(${translateXValue * 2}px, ${translateValue / 3}px, 0)`;
          } else {
            const translateValue = scrollTop * depth;
            layer.style.transform = `translate3d(0, ${translateValue}px, 0)`;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxHeight = 1050;

  return (
    <div className="parallax-wrapper">
      <div className="parallax-container">
        <img
          className="parallax-layer stars"
          src={stars}
          alt="stars"
          height={parallaxHeight}
          parallax-depth="0.1"
        />
        <img
          className="parallax-layer moon"
          src={moon}
          alt="moon"
          height={parallaxHeight}
          parallax-depth="1"
        />
        <img
          className="parallax-layer mountain-back"
          src={mountainBack}
          alt="mountain back"
          height={parallaxHeight}
          parallax-depth="0.4"
        />
        <div className="parallax-layer hello" parallax-depth="1">
          Hello **NAME**
        </div>
        <img
          className="parallax-layer mountain-front"
          src={mountainFront}
          alt="mountain front"
          height={parallaxHeight}
          parallax-depth="0"
        />
      </div>
    </div>
  );
}
