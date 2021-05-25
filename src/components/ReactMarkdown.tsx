import Markdown from "react-markdown";
import * as React from "react";
import slugify from "slugify";
import styles from "css/blog.module.scss";
import HeaderLink from "./HeaderLink";
import dynamic from "next/dynamic";

function getSlug(props): string {
  const node = props.node.children?.[0]?.value;
  return slugify(node, {
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
  p: dynamic(() => import("./Markdown/Paragraph"), {
    loading: () => <>Loading text..</>,
  }) as unknown as () => Element,
  code: dynamic(() => import("./Markdown/Code"), {
    loading: () => <>Loading code..</>,
  }) as unknown as () => Element,
};

const ReactMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Markdown components={components} linkTarget="_blank" className={styles.reactMarkdown}>
      {content}
    </Markdown>
  );
};

export default ReactMarkdown;
