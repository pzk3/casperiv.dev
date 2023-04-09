"use client";

import Link from "next/link";
import {
  BriefcaseIcon,
  HomeIcon,
  NewspaperIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: BriefcaseIcon,
  },
  {
    name: "Stack",
    path: "/about/stack",
    icon: RectangleStackIcon,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: NewspaperIcon,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  function isRouteActive(path: string) {
    return pathname === path;
  }

  return (
    <aside className="w-full max-w-[15rem] fixed transition -left-full lg:left-0 top-0 bottom-0 h-screen bg-gray-100">
      <header className="h-12 flex items-center w-full border-b border-accent px-3 shadow-sm mb-6">
        <h1 className="font-black font-title text-sm uppercase">Casper Iversen</h1>
      </header>

      <ul className="px-3 flex flex-col gap-y-1">
        {routes.map((route) => {
          return (
            <li key={route.path}>
              <Link
                className={clsx(
                  "flex gap-3 items-center font-semibold p-1.5 px-3 rounded-lg",
                  isRouteActive(route.path)
                    ? "bg-accent  text-white"
                    : "group hover:bg-accent hover:text-white",
                )}
                href={route.path}
              >
                <route.icon aria-hidden className="w-4 h-4" />
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
