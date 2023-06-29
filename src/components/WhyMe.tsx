import wave from "../assets/wave_3.svg";
import { ReactSVG } from "react-svg";

export default function WhyMe() {
  return (
    <div className="why-me">
      <ReactSVG className="wave" src={wave} />
        <h2>things you'll love about me</h2>
        <div className="reasons-me-container">
          <div className="card reason-me">
            <h3>Creative Problem Solving</h3>
            <p>text text</p>
          </div>
          <div className="card reason-me">
            <h3>Fast and Curious Learner</h3>
            <p>text text</p>
          </div>
          <div className="card reason-me">
            <h3>Precise Attention to Detail</h3>
            <p>text text</p>
          </div>
        </div>
          <div className="card bonus">
            <h3>Bonus!</h3>
            <p>text text</p>
          </div>
    </div>
  );
}
