import * as React from "react";
import NextLink from "next/link";

interface Props {
  href: string;
  children: React.ReactChild;
  internal: boolean;
}

function Link(props: Props) {
  if (props.href.startsWith("http")) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }

  return <NextLink href={props.href}>{props.children}</NextLink>;
}

export default Link;
