import XIcon from "./icons/XIcon";

const Menu = () => {
  function handleClose() {
    document.getElementById("menu")?.classList.remove("menu__nav--active");
  }

  return (
    <nav id="menu" className="menu__nav">
      <div className="menu__content">
        <button onClick={handleClose} className="close__menu">
          <XIcon />
        </button>
        <div onClick={handleClose} className="menu__links">
          <a href="#" className="menu__link">
            About
          </a>
          <a href="#skills" className="menu__link">
            Skills
          </a>
          <a href="#timeline" className="menu__link">
            Timeline
          </a>
          <a href="#contact" className="menu__link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
