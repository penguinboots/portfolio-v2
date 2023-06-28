import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";

import glow from "../assets/glow_balls.svg";

import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="intro">
      <ReactSVG className="glow" src={glow} />
      <div className="intro-content">
        <div className="intro-title">
          <FontAwesomeIcon className="heart upper" icon={faHeart} beat />
          <h1>hello, company_name</h1>
        </div>
        <div className="intro-body">
          <h2>I'm Sabrina.</h2>
          <div className="typewriter">
            <h2>This is my</h2>
            <TypeAnimation
              className="typed"
              sequence={["love", 1000, "cover", 1000]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
            />
            <h2>letter.</h2>
          </div>
          <h2>My way of showing you just how much I care.</h2>
        </div>
        <FontAwesomeIcon className="heart lower" icon={faHeart} beat />
      </div>
    </div>
  );
}
