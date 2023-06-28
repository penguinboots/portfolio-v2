import { useEffect, useRef, useState } from "react";
import stars from "../assets/stars.png";
import moon from "../assets/moon.png";
import mountainFront from "../assets/mountains_front.png";
import mountainBack from "../assets/mountains_behind.png";
import welcome from "../assets/welcome.svg";
import { ReactSVG } from "react-svg";

export default function Hero() {
  // Parallax effect
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
          } else if (layer.classList.contains("welcome")) {
            const translateValue = scrollTop * depth;
            layer.style.transform = `translate3d(${-translateValue}px, ${translateValue}px, 0)`;
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

  // Text animation
  function setTextAnimation(
    delay: number,
    duration: number,
    strokeWidth: number,
    timingFunction: string,
    strokeColor: string,
    repeat: boolean
  ) {
    const paths = document.querySelectorAll("#welcome path");
    const mode = repeat ? "infinite" : "forwards";
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style.strokeDashoffset = `${length}px`;
      path.style.strokeDasharray = `${length}px`;
      path.style.strokeWidth = `${strokeWidth}px`;
      path.style.stroke = `${strokeColor}`;
      path.style[
        "animation"
      ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style.animationDelay = `${i * delay}s`;
    }
  }

  // Run animation after element is loaded in
  const [isRendered, setIsRendered] = useState(false);
  
  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    setTextAnimation(0.1, 2.7, 1, "linear", "#ffffff", false);
  }, [isRendered]);

  setTextAnimation(0.1, 2.7, 1, "linear", "#ffffff", false);

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
        <ReactSVG
          className="parallax-layer welcome"
          src={welcome}
          parallax-depth="0.4"
        />
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
