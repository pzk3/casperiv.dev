/* eslint-disable react/display-name */
import Markdown from "react-markdown";
import * as React from "react";
import slugify from "slugify";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import styles from "css/blog.module.scss";
import { imageSizes } from "types/ImageSizes";
import HeaderLink from "./HeaderLink";

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
      <h1 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h1>
    );
  },
  h2: (props) => {
    const slug = getSlug(props);
    return (
      <h2 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h2>
    );
  },
  h3: (props) => {
    const slug = getSlug(props);
    return (
      <h3 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h3>
    );
  },
  h4: (props) => {
    const slug = getSlug(props);
    return (
      <h4 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h4>
    );
  },
  h5: (props) => {
    const slug = getSlug(props);
    return (
      <h5 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h5>
    );
  },
  h6: (props) => {
    const slug = getSlug(props);
    return (
      <h6 className={styles.header_link} id={slug}>
        {props.children} <HeaderLink slug={slug} />
      </h6>
    );
  },
  p: (props) => {
    const hasImage = props.children.find((c) => typeof c !== "string" && c.type === "img");

    if (hasImage) {
      const size = imageSizes[hasImage.props.alt];

      return (
        <div style={{ maxWidth: "60%" }}>
          <Image
            draggable={false}
            loading="lazy"
            width={size.width}
            height={size.height}
            src={hasImage.props.src}
            alt={hasImage.props.alt}
          />
        </div>
      );
    }

    return <p>{props.children}</p>;
  },

  code: ({ ...props }) => {
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || "");
    const text = String(children).replace(/\n$/, "");
    const [btnText, setBtnText] = React.useState("Copy");

    function handleCopy() {
      if (typeof window !== "undefined" && window.navigator?.clipboard) {
        navigator.clipboard.writeText(text);
        setBtnText("Copied!");
        setTimeout(() => setBtnText("Copy"), 1000);
      }
    }

    return !inline && match ? (
      <div>
        <button onClick={handleCopy} className={styles.copy_btn}>
          {btnText}
        </button>

        <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
          {text}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className={className}>{props.children}</code>
    );
  },
};

const ReactMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Markdown components={components} linkTarget="_blank" className={styles.react__markdown}>
      {content}
    </Markdown>
  );
};

export default ReactMarkdown;
