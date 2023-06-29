import { Link } from "react-scroll";
// import { convertRemToPixels } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { menuOpen, closeMenu } = props;
  return (
    <div className={`menu-wrapper ${menuOpen ? "" : "closed"}`}>
      <ul className="menu-list">
        <li className="menu-item">
          <Link
            to="app-wrapper"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            welcome
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            about me
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="projects-container"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            projects
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="why-you"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            you & me
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="skills-wrapper"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            my stack
          </Link>
        </li>
        <li className="menu-item close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
