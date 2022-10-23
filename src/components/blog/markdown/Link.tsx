import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

export function Link(props: JSX.IntrinsicElements["a"]) {
  const { children, ...rest } = props;
  const href = rest.href as string;
  const isExternal = href.startsWith("http");
  const className = twMerge("text-neutral-700 hover:text-neutral-900", rest.className);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest} className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a {...rest} className={className}>
        {children}
      </a>
    </NextLink>
  );
}
