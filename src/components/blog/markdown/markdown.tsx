"use client";

import styles from "~/styles/blog.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Link } from "./link";
import { Info } from "./info";
import Image from "next/image";
import { PreCode } from "./pre";

// importing this with next/dynamic will have some flickers..
const components = {
  Link,
  a: Link,
  Info,
  Image,
  pre: PreCode,
};

interface Props {
  code: string;
}

export function Markdown({ code }: Props) {
  const Component = useMDXComponent(code);

  return (
    <section className={["prose mx-auto max-w-3xl", styles.reactMarkdown].join(" ")}>
      <Component components={components as any} />
    </section>
  );
}
