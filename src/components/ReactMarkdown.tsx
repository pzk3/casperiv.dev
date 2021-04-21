/* eslint-disable react/display-name */
import Markdown from "react-markdown";
import slugify from "slugify";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import styles from "css/blog.module.scss";

function getSlug(props): string {
  const node = props.node.children?.[0]?.value;
  return slugify(node, {
    lower: true,
    replacement: "-",
    strict: true,
  });
}

function handleClick(slug: string) {
  if (typeof window !== "undefined") {
    window.location.href = `#${slug}`;
  }
}

const components = {
  h1: (props) => {
    const slug = getSlug(props);
    return (
      <h1 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h1>
    );
  },
  h2: (props) => {
    const slug = getSlug(props);
    return (
      <h2 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h2>
    );
  },
  h3: (props) => {
    const slug = getSlug(props);
    return (
      <h3 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h3>
    );
  },
  h4: (props) => {
    const slug = getSlug(props);
    return (
      <h4 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h4>
    );
  },
  h5: (props) => {
    const slug = getSlug(props);
    return (
      <h5 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h5>
    );
  },
  h6: (props) => {
    const slug = getSlug(props);
    return (
      <h6 id={slug} onClick={() => handleClick(slug)}>
        {props.children}{" "}
      </h6>
    );
  },
  img: (props) => (
    <img draggable={false} loading="lazy" width="100" src={props.src} alt={props.alt} />
  ),
  code: ({ ...props }) => {
    const { inline, className, children } = props;
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
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
