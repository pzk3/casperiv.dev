import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import XIcon from "./icons/XIcon";

const Menu: FC = () => {
  const router = useRouter();
  const is404 = router.pathname !== "/";

  function handleClose() {
    document.getElementById("menu")?.classList.remove("menu__nav--active");
    document.body.classList.remove("disable-scroll");
  }

  return (
    <nav id="menu" className="menu__nav">
      <button onClick={handleClose} className="close__menu">
        <p className="sr-only">Close menu</p>
        <XIcon />
      </button>
      <div className="menu__content">
        <div onClick={handleClose} className="menu__links">
          <a href={is404 ? "/" : "#"} className="menu__link">
            About
          </a>
          <a href={is404 ? "/#skills" : "#skills"} className="menu__link">
            Skills
          </a>
          <a href={is404 ? "/#projects" : "#projects"} className="menu__link">
            Projects
          </a>
          <a href={is404 ? "/#timeline" : "#timeline"} className="menu__link">
            Timeline
          </a>
          <a href={is404 ? "/#contact" : "#contact"} className="menu__link">
            Contact
          </a>
          <a href="/experience" className="menu__link">
            Experience
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
