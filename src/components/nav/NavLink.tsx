import NextLink from "next/link";
import classNames from "clsx";

export function Link({
  menuOpen,
  isActive,
  ...props
}: JSX.IntrinsicElements["a"] & { isActive: boolean; menuOpen: boolean }) {
  return (
    <NextLink href={props.href!}>
      <a
        {...(props as any)}
        className={classNames(
          "py-2 px-3 duration-200 transition-colors rounded-md",
          `umami--click--${props.href?.replaceAll("/", "")}`,
          {
            "my-2 block ": menuOpen,
            "bg-gray-300 dark:bg-blue-3 dark:shadow-md font-medium": isActive,
            "hover:bg-gray-300 hover:dark:bg-blue-4": !isActive,
          },
        )}
      >
        {props.children}
      </a>
    </NextLink>
  );
}
