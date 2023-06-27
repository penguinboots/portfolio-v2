import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { convertRemToPixels } from "../../utils/helpers";

export default function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo">
            <Link to="app-wrapper" spy={true} smooth={true} duration={500}>
              SW
            </Link>
          </div>
        </div>
        <div className="right-nav">
          <ul className="nav-links">
            <li className="nav-item">
              <Link
                to="about-wrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                About
              </Link>
            </li>
            <li className="nav-divider">|</li>
            <li className="nav-item">
              <Link
                to="projects-wrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-divider">|</li>
            <li className="nav-item">
              <Link
                to="skills-wrapper"
                spy={true}
                smooth={true}
                duration={500}
                offset={-convertRemToPixels(8)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-divider">|</li>
            <li className="nav-item">
              <a
                href="https://flowcv.com/resume/7vgjugqk7r"
                rel="noreferrer"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
          {/* <Hamburger toggled={isOpen} toggle={toggleMenu} /> */}
        </div>
      </nav>
    </div>
  );
}
