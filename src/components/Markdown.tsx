import * as React from "react";
import dynamic from "next/dynamic";
import { getMDXComponent } from "mdx-bundler/client";
import styles from "css/blog.module.scss";

const components = {
  a: dynamic(() => import("./Markdown/Link").then((v) => v.Link), {
    loading: () => <>Loading links..</>,
  }),
  Image: dynamic(() => import("./Markdown/Image").then((v) => v.MdImage), {
    loading: () => <>Loading text..</>,
  }),
  code: dynamic(() => import("./Markdown/Code").then((v) => v.MDCode), {
    loading: () => <>Loading code..</>,
  }),
  Alert: dynamic(() => import("./Markdown/Alert").then((v) => v.Alert), {
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
