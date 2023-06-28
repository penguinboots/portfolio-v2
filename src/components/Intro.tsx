import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-text">
        <h1>hello, company_name</h1>
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
        <FontAwesomeIcon className="heart" icon={faHeart} beat />
      </div>
    </div>
  );
}
