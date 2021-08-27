import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import styles from "./nav.module.scss";
import { menuNavActive, menuBgActive } from "@components/Menu/menu.module.scss";

export const Nav = () => {
  const ref = React.useRef<HTMLDivElement>();
  const router = useRouter();
  const is404 = router.pathname !== "/";
  const { dispatch } = useEmitEvent("focusOnContact", true);

  React.useEffect(() => {
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
    document.getElementById("menu")?.classList.add(menuNavActive);
    document.getElementById("menu__bg")?.classList.add(menuBgActive);
    document.body.classList.add("disable-scroll");
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
            <Link href={is404 ? "/#projects" : "#projects"}>
              <a className={styles.navLink}>Projects</a>
            </Link>
            <Link scroll href="/experience">
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

          <div className={styles.hamburgerContainer}>
            <Link href={is404 ? "/#contact" : "#contact"}>
              <a onClick={dispatch} className={styles.navLink}>
                Contact
              </a>
            </Link>

            <button
              aria-label="Open Menu"
              onClick={handleHamburgerClick}
              className={styles.hamburger}
            >
              <span className={styles.hamburgerItem} />
              <span className={styles.hamburgerItem} />
              <span className={styles.hamburgerItem} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
