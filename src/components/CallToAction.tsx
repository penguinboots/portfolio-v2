import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import glow from "../assets/glow_balls.svg";
import ContactIcons from "./ContactIcons";

export default function CallToAction() {
  return (
    <div className="call-to">
      <ReactSVG className="glow" src={glow} />
      <div className="call-content">
        <h1>I think we'd be a perfect match</h1>
        <FontAwesomeIcon className="heart upper" icon={faHeart} beat />
        <ContactIcons />
      </div>
    </div>
  );
}
