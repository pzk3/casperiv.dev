import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";
import XIcon from "./icons/XIcon";

const Menu: FC = () => {
  const router = useRouter();
  const is404 = router.pathname !== "/";

  function handleClose() {
    document.getElementById("menu")?.classList.remove("menu__nav--active");
    document.getElementById("menu__bg")?.classList.remove("menu__bg--active");
    document.body.classList.remove("disable-scroll");
  }

  return (
    <>
      <div onClick={handleClose} id="menu__bg" className="menu__bg" />
      <nav id="menu" className="menu__nav">
        <button onClick={handleClose} className="close__menu">
          <p className="sr-only">Close menu</p>
          <XIcon />
        </button>

        <div className="menu__content">
          <div onClick={handleClose} className="menu__links">
            <Link href={is404 ? "/" : "#"}>
              <a className="menu__link">About</a>
            </Link>
            <Link href={is404 ? "/#skills" : "#skills"}>
              <a className="menu__link">Skills</a>
            </Link>
            <Link href={is404 ? "/#projects" : "#projects"}>
              <a className="menu__link">Projects</a>
            </Link>
            <Link href={is404 ? "/#timeline" : "#timeline"}>
              <a className="menu__link">Timeline</a>
            </Link>
            <Link href={is404 ? "/#contact" : "#contact"}>
              <a className="menu__link">Contact</a>
            </Link>

            <Link href="/experience">
              <a href="/experience" className="menu__link">
                Experience
              </a>
            </Link>

            <Link href="/blog">
              <a href="/blog" className="menu__link">
                Blog
              </a>
            </Link>

            <Link href="/snippets">
              <a href="/snippets" className="menu__link">
                Code snippets
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
