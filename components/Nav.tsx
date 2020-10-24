import { useRef, useEffect } from "react";

const Nav = () => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    // ref.current
  })

  return (
    <nav ref={ref} className="nav" id="nav">
      <div className="nav__content">
        <h1 className="nav__icon">
          <a href="/">Casper Iversen</a>
        </h1>

        <div className="nav__links">
          <a href="#about" className="nav__link">
            About
          </a>
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
