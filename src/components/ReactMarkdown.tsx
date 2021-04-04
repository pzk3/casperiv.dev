/* eslint-disable react/display-name */
import Markdown from "react-markdown";
import slugify from "slugify";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import styles from "css/blog.module.scss";

const renderers = {
  heading: (props) => {
    const node = props.node.children?.[0]?.value;
    const slug = slugify(node, {
      lower: true,
      replacement: "-",
      strict: true,
    });

    function handleClick() {
      if (typeof window !== "undefined") {
        window.location.href = `#${slug}`;
      }
    }

    // couldn't find a better way todo this.
    switch (props.level) {
      case 1: {
        return (
          <h1 onClick={handleClick} id={slug}>
            {props.children}
          </h1>
        );
      }
      case 2: {
        return (
          <h2 onClick={handleClick} id={slug}>
            {props.children}
          </h2>
        );
      }
      case 3: {
        return (
          <h3 onClick={handleClick} id={slug}>
            {props.children}
          </h3>
        );
      }
      case 4: {
        return (
          <h4 onClick={handleClick} id={slug}>
            {props.children}
          </h4>
        );
      }
      case 5: {
        return (
          <h5 onClick={handleClick} id={slug}>
            {props.children}
          </h5>
        );
      }
      default: {
        return (
          <h6 onClick={handleClick} id={slug}>
            {props.children}
          </h6>
        );
      }
    }
  },
  image: (props) => (
    <img draggable={false} loading="lazy" width="100" src={props.src} alt={props.alt} />
  ),
  code: (props) => {
    return (
      <SyntaxHighlighter style={Theme} language={props.language}>
        {props.value}
      </SyntaxHighlighter>
    );
  },
};

const ReactMarkdown: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Markdown renderers={renderers} linkTarget="_blank" className={styles.react__markdown}>
      {content}
    </Markdown>
  );
};

export default ReactMarkdown;
