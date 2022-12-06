"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Github, Linkedin, List, Twitter, X } from "react-bootstrap-icons";
import classNames from "clsx";
import { useViewport } from "lib/hooks/use-viewport";
import { IconLink } from "./nav/icon-link";
import { NavLink } from "./nav/nav-link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
    types: ["/blog", "/blog/[slug]"],
  },
  {
    name: "Code Snippets",
    href: "/snippets",
    types: ["/snippets", "/snippets/[slug]"],
  },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const viewport = useViewport();

  React.useEffect(() => {
    if (viewport > 768) {
      setMenuOpen(false);
    }
  }, [viewport]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isCurrent(path: string | string[]) {
    const array = Array.isArray(path) ? path : [path];
    if (!pathname) return false;
    return array.includes(pathname);
  }

  return (
    <header
      className="sticky top-0 z-30 flex items-center justify-center w-full px-5 h-15 bg-primary"
      id="nav"
    >
      <nav className="flex items-center justify-between w-full h-20 max-w-4xl">
        <ul
          className={classNames(
            "h-full space-x-1 md:items-center",
            menuOpen
              ? "fixed w-full h-[22rem] top-0 left-0 z-50 flex items-center flex-col bg-primary p-5 shadow-lg open-nav-animation"
              : "hidden md:flex relative",
          )}
        >
          {links.map((link) => (
            <li className="z-50" key={link.href} data-href={link.href}>
              <NavLink
                menuOpen={menuOpen}
                href={link.href}
                isActive={isCurrent(link.types ?? link.href)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center h-full space-x-1">
          <li>
            <IconLink
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin profile"
              href="https://linkedin.com/in/casper-iversen"
            >
              <Linkedin />
            </IconLink>
          </li>
          <li>
            <IconLink
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              href="https://github.com/dev-caspertheghost"
            >
              <Github />
            </IconLink>
          </li>
          <li>
            <IconLink
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter profile"
              href="https://twitter.com/casper124578"
            >
              <Twitter />
            </IconLink>
          </li>
          {/* <li>
            <ThemeSwitcher />
          </li> */}
        </ul>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          className="z-50 flex flex-col w-8 md:hidden"
        >
          {menuOpen ? <X width={35} height={35} /> : <List width={30} height={30} />}
        </button>
      </nav>
    </header>
  );
}
