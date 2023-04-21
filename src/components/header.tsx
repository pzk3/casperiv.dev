"use client";

import * as React from "react";
import classNames from "classnames";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FullScreenNav } from "./full-screen-nav";

const navLinks = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About",
    pathname: "/about",
  },
  {
    name: "Contact",
    pathname: "/#contact",
  },
  {
    name: "Blog",
    pathname: "/blog",
  },
];

const variants: Variants = {
  initial: {
    opacity: 0,
    width: 0,
  },
  hover: {
    opacity: 0.5,
    width: "60%",
  },
  active: {
    opacity: 1,
    width: "50%",
  },
};

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    // shadow onScroll
    <header className="w-full py-7 px-5 md:px-0 sticky top-0 bg-primary z-50">
      <nav className="max-w-6xl w-full mx-auto flex items-center justify-between font-poppins">
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => {
            const isRouteActive = pathname === link.pathname;

            return (
              <motion.li
                initial="initial"
                whileHover="hover"
                animate={isRouteActive ? "active" : "initial"}
                key={link.pathname}
              >
                <Link
                  className={classNames("relative", isRouteActive && "font-semibold")}
                  href={link.pathname}
                >
                  {link.name}

                  <motion.span
                    variants={variants}
                    className="absolute block left-0 -bottom-1 w-1/2 h-[2px] bg-secondary rounded-2xl"
                  />
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-end gap-y-1.5 w-8 md:w-10 hover:gap-y-2 transition-all ease-in-out duration-100 group"
        >
          <span className="h-0.5 bg-secondary group-hover:bg-accent w-full" />
          <span className="h-0.5 bg-secondary group-hover:bg-accent w-2/3" />
          <span className="h-0.5 bg-secondary group-hover:bg-accent w-full" />
        </button>
      </nav>

      <FullScreenNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
