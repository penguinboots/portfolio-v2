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
  const [navColor, setNavColor] = useState<string>("rgb(255, 255, 255, 0.8)");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;
      const threshold = 1700;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);

      if (currentScrollPos <= threshold) {
        setNavColor("rgb(255, 255, 255, 0.8)");
      } else {
        setNavColor("rgb(0, 0, 0, 0.7)");
      }
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
            <Link
              to="app-wrapper"
              spy={true}
              smooth={true}
              duration={1000}
              style={{ color: navColor }}
            >
              SW
            </Link>
          </div>
        </div>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} color={navColor}/>
      </nav>
    </div>
  );
};

export default Navbar;
