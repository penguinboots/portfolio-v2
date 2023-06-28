import wave from "../assets/bottom_wave.svg";
import { ReactSVG } from "react-svg";

export default function About() {
  return (
    <div className="about">
      <ReactSVG className="wave" src={wave} />
    </div>
  );
}
