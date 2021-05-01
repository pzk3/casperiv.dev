import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useEffect, FC } from "react";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";

const Nav: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const router = useRouter();
  const is404 = router.pathname !== "/";
  const { dispatch } = useEmitEvent("focusOnContact", true);

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
    document.getElementById("menu__bg")?.classList.add("menu__bg--active");
    document.body.classList.add("disable-scroll");
  }

  function handleAboutClick() {
    if (is404) {
      return router.push("/#");
    }
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
            <Link href={is404 ? "/#skills" : "#skills"}>
              <a className="nav__link">Skills</a>
            </Link>
            <Link href={is404 ? "/#projects" : "#projects"}>
              <a className="nav__link">Projects</a>
            </Link>
            <Link href={is404 ? "/#timeline" : "#timeline"}>
              <a className="nav__link">Timeline</a>
            </Link>
            <Link href={is404 ? "/#contact" : "#contact"}>
              <a onClick={dispatch} className="nav__link">
                Contact
              </a>
            </Link>
            <Link href="/experience">
              <a href="/experience" className="nav__link">
                Experience
              </a>
            </Link>
            <Link href="/blog">
              <a href="/blog" className="nav__link">
                Blog
              </a>
            </Link>
            <Link href="/snippets">
              <a href="/snippets" className="nav__link">
                Code snippets
              </a>
            </Link>
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
