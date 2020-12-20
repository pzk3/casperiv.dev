import { useRef, useEffect, FC } from "react";

const Nav: FC = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current.classList.add("nav--active");
      } else {
        ref.current.classList.remove("nav--active");
      }
    };
  }, []);

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop;

    return window.pageYOffset > offset;
  }

  function handleHamburgerClick() {
    document.getElementById("menu")?.classList.add("menu__nav--active");
    document.body.classList.add("disable-scroll");
  }

  function handleAboutClick() {
    if (isPageOffset()) {
      window.location.href = "#";
    } else {
      window.scrollTo(0, 60);
    }
  }

  return (
    <div className="nav__container">
      <nav ref={ref} className="nav" id="nav">
        <div className="nav__content">
          <h1 className="nav__icon">
            <a href="/">
              Casper <span className="nav__hidden">Iversen</span>
            </a>
          </h1>

          <div className="nav__links">
            <button onClick={handleAboutClick} className="nav__link">
              About
            </button>
            <a href="#skills" className="nav__link">
              Skills
            </a>
            <a href="#projects" className="nav__link">
              Projects
            </a>
            <a href="#timeline" className="nav__link">
              Timeline
            </a>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </div>

          <button onClick={handleHamburgerClick} className="hamburger">
            <p className="sr-only">Open Menu</p>
            <span className="hamburger__item"></span>
            <span className="hamburger__item"></span>
            <span className="hamburger__item"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
