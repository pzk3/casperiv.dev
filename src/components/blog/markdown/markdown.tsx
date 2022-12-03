import styles from "styles/blog.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Link } from "./link";
import { MDCode } from "./code";
import { Info } from "./info";
import Image from "next/image";

// importing this with next/dynamic will have some flickers..
const components = {
  Link,
  a: Link,
  pre: MDCode,
  Info,
  Image,
};

interface Props {
  code: string;
}

export function Markdown({ code }: Props) {
  const Component = useMDXComponent(code);

  return (
    <main className={["prose max-w-none", styles.reactMarkdown].join(" ")}>
      <Component components={components as any} />
    </main>
  );
}
