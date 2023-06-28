import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { menuOpen, setMenuOpen } = props;
  return (
    <div className="nav-wrapper">
      <nav className="nav-bar">
        <div className="left-nav">
          <div className="logo">
            <Link to="app-wrapper" spy={true} smooth={true} duration={1000}>
              SW
            </Link>
          </div>
        </div>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </nav>
    </div>
  );
};

export default Navbar