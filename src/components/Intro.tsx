import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";

import glow from "../assets/glow_balls.svg";

import { TypeAnimation } from "react-type-animation";
import ContactIcons from "./ContactIcons";

export default function Intro() {
  return (
    <div className="intro">
      <ReactSVG className="glow" src={glow} />
      <div className="intro-content">
        <div className="intro-title">
          <FontAwesomeIcon className="heart upper" icon={faHeart} beat />
          <h1>hello there,</h1>
        </div>
        <div className="intro-body">
          <h2>I'm Sabrina.</h2>
          <div className="typewriter">
            <h2>This is my</h2>
            <TypeAnimation
              className="typed"
              sequence={["portfolio.", 1000, "website.", 1000, "art project.", 1000]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <h2>Take a look at what makes me tick!</h2>
          <ContactIcons />
        </div>
        <FontAwesomeIcon className="heart lower" icon={faHeart} beat />
      </div>
    </div>
  );
}
