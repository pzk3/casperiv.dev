"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { List, X } from "react-bootstrap-icons";
import { useViewport } from "lib/hooks/use-viewport";

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

  return (
    <header
      // todo: margin bottom instead of margin top on main
      className="sticky top-0 z-30 flex items-center justify-center w-full px-5 h-12 bg-primary border-b border-gray-100 shadow-sm mb-7 md:mb-12"
      id="nav"
    >
      <nav className="flex items-center justify-between w-full h-20 max-w-layout">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
          className="z-50 flex flex-col w-8 lg:hidden"
        >
          {menuOpen ? <X width={35} height={35} /> : <List width={30} height={30} />}
        </button>
      </nav>
    </header>
  );
}
