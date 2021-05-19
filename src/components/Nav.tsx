import { useRouter } from "next/router";
import Link from "next/link";
import { useRef, useEffect, FC } from "react";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import styles from "css/nav.module.scss";

const Nav: FC = () => {
  const ref = useRef<HTMLDivElement>();
  const router = useRouter();
  const is404 = router.pathname !== "/";
  const { dispatch } = useEmitEvent("focusOnContact", true);

  useEffect(() => {
    window.onscroll = function updateNav() {
      if (isPageOffset()) {
        ref.current.classList.add(styles.navActive);
      } else {
        ref.current.classList.remove(styles.navActive);
      }
    };
  }, []);

  function isPageOffset(): boolean {
    const offset = ref.current?.offsetTop;

    return window.pageYOffset > offset;
  }

  function handleHamburgerClick() {
    document.getElementById("menu")?.classList.add(styles.menuNavActive);
    document.getElementById("menu__bg")?.classList.add(styles.menuBgActive);
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
    <div className={styles.navContainer}>
      <nav ref={ref} className={styles.nav} id="nav">
        <div className={styles.navContent}>
          <h1 className={styles.navIcon}>
            <a href="/">
              Casper <span className={styles.navHidden}>Iversen</span>
            </a>
          </h1>

          <div className={styles.navLinks}>
            <button onClick={handleAboutClick} className={styles.navLink}>
              About
            </button>
            <Link href={is404 ? "/#skills" : "#skills"}>
              <a className={styles.navLink}>Skills</a>
            </Link>
            <Link href={is404 ? "/#projects" : "#projects"}>
              <a className={styles.navLink}>Projects</a>
            </Link>
            <Link href={is404 ? "/#timeline" : "#timeline"}>
              <a className={styles.navLink}>Timeline</a>
            </Link>
            <Link href={is404 ? "/#contact" : "#contact"}>
              <a onClick={dispatch} className={styles.navLink}>
                Contact
              </a>
            </Link>
            <Link href="/experience">
              <a href="/experience" className={styles.navLink}>
                Experience
              </a>
            </Link>
            <Link href="/blog">
              <a href="/blog" className={styles.navLink}>
                Blog
              </a>
            </Link>
            <Link href="/snippets">
              <a href="/snippets" className={styles.navLink}>
                Code snippets
              </a>
            </Link>
          </div>

          <button onClick={handleHamburgerClick} className={styles.hamburger}>
            <p className="sr-only">Open Menu</p>
            <span className={styles.hamburgerItem} />
            <span className={styles.hamburgerItem} />
            <span className={styles.hamburgerItem} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
