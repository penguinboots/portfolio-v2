import wave from "../assets/bottom_wave.svg";
import { ReactSVG } from "react-svg";


export default function Placeholder(props) {
  const colour = props;
  return (
    <div className="placeholder" style={{backgroundColor: colour}}>
      <ReactSVG
        src={wave}
      />
    </div>
  );
}
