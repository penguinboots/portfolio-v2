import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  return (
    <div className="landing">
      <h1>LOADING</h1>
      <div className="spinner">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    </div>
  );
}
