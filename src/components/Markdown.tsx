import * as React from "react";
import slugify from "slugify";
import dynamic from "next/dynamic";
import { getMDXComponent } from "mdx-bundler/client";

import styles from "css/blog.module.scss";
import { HeaderLink } from "./HeaderLink";

function getSlug(props): string {
  return slugify(props.children, {
    lower: true,
    replacement: "-",
    strict: true,
  });
}

const components = {
  h1: (props) => {
    const slug = getSlug(props);
    return (
      <h1 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h1>
    );
  },
  h2: (props) => {
    const slug = getSlug(props);
    return (
      <h2 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h2>
    );
  },
  h3: (props) => {
    const slug = getSlug(props);
    return (
      <h3 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h3>
    );
  },
  h4: (props) => {
    const slug = getSlug(props);
    return (
      <h4 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h4>
    );
  },
  h5: (props) => {
    const slug = getSlug(props);
    return (
      <h5 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h5>
    );
  },
  h6: (props) => {
    const slug = getSlug(props);
    return (
      <h6 className={styles.headerLink} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h6>
    );
  },
  a: dynamic(() => import("./Markdown/Link").then((v) => v.Link), {
    loading: () => <>Loading links..</>,
  }),
  Image: dynamic(() => import("./Markdown/Image").then((v) => v.MdImage), {
    loading: () => <>Loading text..</>,
  }),
  code: dynamic(() => import("./Markdown/Code").then((v) => v.MDCode), {
    loading: () => <>Loading code..</>,
  }),
  Warn: dynamic(() => import("./Markdown/Warn").then((v) => v.Warn), {
    loading: () => <>Loading text..</>,
  }),
};

interface Props {
  content: string;
}

export const Markdown = ({ content }: Props) => {
  const Component = React.useMemo(() => getMDXComponent(content), [content]);

  return (
    <main className={styles.reactMarkdown}>
      <Component components={components as any} />
    </main>
  );
};
