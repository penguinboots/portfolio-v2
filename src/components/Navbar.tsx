import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { menuOpen, setMenuOpen } = props;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <div className={`nav-wrapper ${visible ? "" : "hidden"}`}>
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

export default Navbar;
