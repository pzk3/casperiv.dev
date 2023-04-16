"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="w-full py-7 px-5 md:px-0">
      <nav className="max-w-6xl w-full mx-auto flex items-center justify-between font-poppins">
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => {
            const isRouteActive = pathname === link.pathname;

            return (
              <li key={link.pathname}>
                <Link className={classNames(isRouteActive && "font-semibold")} href={link.pathname}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="flex flex-col items-end gap-y-1.5 w-10 hover:gap-y-2 transition-all ease-in-out duration-100">
          <span className="h-0.5 bg-secondary w-full" />
          <span className="h-0.5 bg-secondary w-2/3" />
          <span className="h-0.5 bg-secondary w-full" />
        </button>
      </nav>
    </header>
  );
}
