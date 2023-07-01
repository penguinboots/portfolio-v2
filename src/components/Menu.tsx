import { Link } from "react-scroll";

interface MenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
  navColor: string;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { menuOpen, closeMenu, navColor } = props;

  return (
    <div className={`menu-wrapper ${menuOpen ? "" : "hidden"}`}>
      <ul className="menu-list">
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
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
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
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
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
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
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
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
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
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
        <li
          className="menu-item"
          style={{ color: navColor, transition: "color 0.3s ease" }}
        >
          <Link
            to="call-to"
            spy={true}
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
