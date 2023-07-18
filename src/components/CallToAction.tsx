import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import glow from "../assets/glow_balls.svg";
import ContactIcons from "./ContactIcons";
import { useState } from "react";

export default function CallToAction() {
  const [ringing, setRinging] = useState(true);
  return (
    <div className="call-to">
      <ReactSVG className="glow" src={glow} />
      <div className="call-content">
        <h1>if you want to work together...</h1>
        <button
          className={`phone-container ${ringing ? "ringing" : "open"}`}
          onClick={() => setRinging(false)}
        >
          {ringing ? (
            <div className="phone-ring">
              <FontAwesomeIcon icon={faPhone} shake />
            </div>
          ) : (
            <>
              <div className="phone-ring spin-out">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="phone-noring fade-in-late"
                />
              </div>
              <div className="call-text">
                <h3>CALL ME MAYBE?</h3>
                <h3>778 989 4856</h3>
              </div>
            </>
          )}
        </button>
        {/* <FontAwesomeIcon className="heart upper" icon={faHeart} beat /> */}
        <ContactIcons />
        <p>© 2023 Sabrina Wang</p>
      </div>
    </div>
  );
}
