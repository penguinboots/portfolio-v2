import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faHandshake,
  faCircleQuestion,
} from "@fortawesome/free-regular-svg-icons";
import { faTrophy, faStar } from "@fortawesome/free-solid-svg-icons";
import wave from "../assets/wave_3.svg";
import { ReactSVG } from "react-svg";

export default function WhyMe() {
  return (
    <div className="why-me">
      <ReactSVG className="wave" src={wave} />
      <h2>things you'd love about me</h2>
      <div className="reasons-me-container">
        <div className="reasons-me-line">
          <div className="card reason-me">
            <FontAwesomeIcon icon={faLightbulb} />
            <h3>Creative Problem Solver</h3>
            <p>
              I thrive on tackling complex problems, and approach challenges
              from unique angles. I'm always looking to think outside the box and
              find new, creative solutions.
            </p>
            <p>
              Innovation is built on strong foundational knowledge, and I
              prioritize understanding existing solutions when considering
              opportunities to build something even greater.
            </p>
          </div>
          <div className="card reason-me">
            <FontAwesomeIcon icon={faCircleQuestion} />
            <h3>Endless Curiosity, Fast Learner</h3>
            <p>
              My ability to learn is one of my greatest strengths. I have a
              passion for acquiring new knowledge and skills, and quickly grasp
              new concepts.
            </p>
            <p>
              I'm not afraid to ask questions and eagerly dive into unfamiliar
              territory.
            </p>
          </div>
        </div>
        <div className="reasons-me-line">
          <div className="card reason-me">
            <FontAwesomeIcon icon={faHandshake} />
            <h3>Collaborative Team Player</h3>
            <p>
              Teamwork is the key to realizing anything truly great. It is
              important to me to foster a positive and inclusive environment
              where all are respected.
            </p>
            <p>
              I believe in staying humble, both in receiving and offering
              assistance, and incorporating empathy and compassion.
            </p>
          </div>
          <div className="card reason-me">
            <FontAwesomeIcon icon={faTrophy} />
            <h3>Reach Higher!</h3>
            <p>
              I hold myself to a high standard in everything I do, and am driven
              by the desire to continuously improve and excel.
            </p>
            <p>
              Whether it's through setting challenging goals, seeking continous
              improvement, or embracing new (and scary!) opportunities, I am
              relentless in my pursuit of excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="card bonus">
        <h3>
          <FontAwesomeIcon icon={faStar} spin />
          <span> bonus points </span>
          <FontAwesomeIcon icon={faStar} spin />
        </h3>
        <p>
          As a Lighthouse Labs graduate, I come with the ICT Boost wage subsidy,
          funded by the Government of Canada 🍁. Ask me for details!
        </p>
      </div>
    </div>
  );
}
