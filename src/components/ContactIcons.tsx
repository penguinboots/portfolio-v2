import iconGithub from "../assets/icon_github.svg";
import iconLinkedIn from "../assets/icon_linkedin.svg";
import iconMail from "../assets/icon_mail.svg";
import iconResume from "../assets/icon_resume.svg";

export default function ContactIcons() {
  return (
    <ul className="contact-icons">
      <li>
        <a href="https://github.com/penguinboots">
          <img src={iconGithub} alt="github icon" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sabrina-y-wang/">
          <img src={iconLinkedIn} />
        </a>
      </li>
      <li>
        <a href="https://flowcv.com/resume/7vgjugqk7r">
          <img src={iconResume} />
        </a>
      </li>
      <li>
        <a href="mailto: sabrina.ynw@gmail.com">
          <img src={iconMail} />
        </a>
      </li>
    </ul>
  );
}
