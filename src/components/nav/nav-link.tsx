import classNames from "clsx";
import { Link } from "components/blog/markdown/link";

export function NavLink({
  menuOpen,
  isActive,
  ...props
}: Omit<JSX.IntrinsicElements["a"], "ref"> & { isActive: boolean; menuOpen: boolean }) {
  return (
    <Link
      href={props.href!}
      isNav
      {...props}
      className={classNames("relative group py-2 pr-2.5 duration-200 transition rounded-md", {
        "my-2 block": menuOpen,
        "text-secondary font-medium": isActive,
      })}
    >
      {props.children}

      <span
        className={classNames(
          "absolute bottom-0 left-0 rounded-md h-1.75 opacity-0 bg-accent w-full group-hover:opacity-80 ease-in-out transition-opacity",
          {
            "opacity-100": isActive,
          },
        )}
      />
    </Link>
  );
}
