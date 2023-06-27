interface MenuProps {
  menuOpen: boolean;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { menuOpen } = props;
  return (
    <div
      className={`menu-wrapper
        ${menuOpen ? "" : "closed"}
      `}
    >
      <div className="menu-body"></div>
    </div>
  );
};

export default Menu;
