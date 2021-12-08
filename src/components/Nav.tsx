import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Github, List, Twitter, X } from "react-bootstrap-icons";
import classNames from "clsx";
import { useViewport } from "lib/useViewport";
import { useSSRSafeId } from "@react-aria/ssr";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Code Snippets",
    href: "/snippets",
  },
];

export function Nav() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const viewport = useViewport();

  const twitterId = useSSRSafeId();
  const githubId = useSSRSafeId();

  const [wrapperRect, setWrapperRect] = React.useState<DOMRect | null>(null);
  const [activeRect, setActiveRect] = React.useState<DOMRect | null>(null);
  const [clickedRoute, setClickedRoute] = React.useState<boolean>(false);
  const wrapperRef = React.useRef<HTMLUListElement>(null);

  const styles =
    activeRect && wrapperRect
      ? {
          width: activeRect.width,
          height: 33.333,
          transform: `translateY(-50%) translateX(${activeRect.left - wrapperRect.left}px)`,
        }
      : {};

  function handleMouseOver(e: Pick<React.MouseEvent<HTMLLIElement>, "target">) {
    const target = e.target as HTMLLinkElement;

    if (!wrapperRef.current) {
      console.error("Could not fund the wrapperRef.");
      return;
    }

    setWrapperRect(wrapperRef.current.getBoundingClientRect() ?? null);
    setActiveRect(target.getBoundingClientRect());
  }

  function findActiveElement() {
    const children = (wrapperRef.current?.children ?? []) as HTMLLIElement[];

    if (children.length > 0) {
      const pathname = router.pathname;
      const hash = window.location.hash;
      const href = `${pathname}${hash}`;

      const child = [...children].find((v) => v.dataset.href === href);

      if (child) {
        handleMouseOver({ target: child });
      }
    }
  }

  React.useEffect(() => {
    findActiveElement();
    setClickedRoute(false);
    // eslint-disable-next-line
  }, [router]);

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
          // reset back to the active item
          onMouseLeave={!clickedRoute ? findActiveElement : undefined}
          ref={wrapperRef}
          className={classNames(
            "h-full space-x-1 md:items-center",
            menuOpen
              ? "fixed w-full h-[22rem] top-0 left-0 z-50 flex items-center flex-col bg-blue p-5 shadow-lg"
              : "hidden md:flex relative",
          )}
        >
          {menuOpen ? null : (
            <div
              style={styles}
              className="absolute bg-blue-1 p-1.5 px-3 duration-200 rounded-md shadow-sm hover:bg-blue-2 top-1/2 transition-all"
            />
          )}

          {links.map((link) => (
            <li
              className="z-50"
              onMouseOver={handleMouseOver}
              key={link.href}
              data-href={link.href}
            >
              <Link onClick={() => setClickedRoute(true)} menuOpen={menuOpen} href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
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
}

function Link({ menuOpen, ...props }: JSX.IntrinsicElements["a"] & { menuOpen: boolean }) {
  return (
    <NextLink href={props.href!}>
      <a
        {...props}
        className={classNames("p-1.5 px-3 duration-200 transition-colors rounded-md ", {
          "my-2 block": menuOpen,
        })}
      >
        {props.children}
      </a>
    </NextLink>
  );
}
