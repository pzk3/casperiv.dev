import NextLink from "next/link";
import classNames from "clsx";

export function NavLink({
  menuOpen,
  isActive,
  ...props
}: Omit<JSX.IntrinsicElements["a"], "ref"> & { isActive: boolean; menuOpen: boolean }) {
  return (
    <NextLink
      href={props.href!}
      {...props}
      className={classNames("py-2 px-3 duration-200 transition rounded-md", {
        "my-2 block ": menuOpen,
        "bg-secondary text-white hover:brightness-125 font-medium shadow-md": isActive,
        "hover:bg-secondary-light hover:text-white": !isActive,
      })}
    >
      {props.children}
    </NextLink>
  );
}
