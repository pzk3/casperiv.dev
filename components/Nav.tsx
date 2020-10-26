import { useRef, useEffect } from "react";

const Nav = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const offset = ref.current?.offsetTop;

    window.onscroll = function updateNav() {
      if (window.pageYOffset > offset) {
        ref.current.classList.add("nav--active");
      } else {
        ref.current.classList.remove("nav--active");
      }
    };
  }, []);

  return (
    <div className="nav__container">
      <nav ref={ref} className="nav" id="nav">
        <div className="nav__content">
          <h1 className="nav__icon">
            <a href="/">Casper Iversen</a>
          </h1>

          <div className="nav__links">
            <a href="#" className="nav__link">
              About
            </a>
            <a href="#skills" className="nav__link">
              Skills
            </a>
            <a href="#timeline" className="nav__link">
              Timeline
            </a>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
