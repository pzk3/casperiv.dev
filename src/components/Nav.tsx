import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Github, List, Twitter, X } from "react-bootstrap-icons";
import classNames from "clsx";
import { useViewport } from "lib/useViewport";
import { useSSRSafeId } from "@react-aria/ssr";

export const Nav = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const viewport = useViewport();

  const twitterId = useSSRSafeId();
  const githubId = useSSRSafeId();

  React.useEffect(() => {
    if (viewport > 768) {
      setMenuOpen(false);
    }
  }, [viewport]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [router]);

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-center w-full px-5 h-15 bg-blue"
      id="nav"
    >
      <nav className="flex items-center justify-between w-full h-20 max-w-4xl">
        <ul
          className={classNames(
            "h-full space-x-1 md:items-center",
            menuOpen
              ? "fixed w-full h-[22rem] top-0 left-0 z-50 flex items-center flex-col bg-blue p-5 shadow-lg"
              : "hidden md:flex",
          )}
        >
          <li>
            <Link menuOpen={menuOpen} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link menuOpen={menuOpen} href="/#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link menuOpen={menuOpen} href="/#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link menuOpen={menuOpen} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link menuOpen={menuOpen} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link menuOpen={menuOpen} href="/snippets">
              Code Snippets
            </Link>
          </li>
        </ul>

        <ul className="flex items-center h-full space-x-3">
          <li>
            <a
              id={githubId}
              aria-label="GitHub profile"
              href="https://github.com/dev-caspertheghost"
            >
              <Github aria-labelledby={githubId} width={21} height={21} />
            </a>
          </li>
          <li>
            <a id={twitterId} aria-label="Twitter profile" href="https://twitter.com/casper124578">
              <Twitter aria-labelledby={twitterId} width={21} height={21} />
            </a>
          </li>
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
};

const Link = ({ menuOpen, ...props }: JSX.IntrinsicElements["a"] & { menuOpen: boolean }) => {
  const router = useRouter();

  const isActive = props.href === router.pathname;

  return (
    <NextLink href={props.href!}>
      <a
        {...props}
        className={classNames(
          { "bg-blue-1 font-medium shadow-sm": isActive && !menuOpen },
          "p-1.5 px-3 duration-200 transition-colors rounded-md hover:shadow-sm hover:bg-blue-1",
          { "my-2 block": menuOpen },
        )}
      >
        {props.children}
      </a>
    </NextLink>
  );
};
