import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import styles from "styles/blog.module.scss";

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
  content: string;
}

export function Markdown({ content }: Props) {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <main className={["prose max-w-none", styles.reactMarkdown].join(" ")}>
      <Component components={components as any} />
    </main>
  );
}
