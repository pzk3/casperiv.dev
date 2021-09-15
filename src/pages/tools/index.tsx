import { GetStaticProps } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import styles from "css/utils/utils.module.scss";
import { Seo } from "@components/Seo";

interface Props {
  tools: string[];
}

export default function ToolsIndex({ tools }: Props) {
  return (
    <div>
      <Seo description="A list of useful tools on my website." title="Tools - Casper Iversen" />

      <h1>Tools</h1>
      <p>A list of useful tools on my website.</p>

      <div className={styles.tools}>
        {tools.map((tool) => (
          <a className={styles.tool} href={`/tools/${tool}`} key={tool}>
            <h3>{tool}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const path = join(process.cwd(), "src", "pages", "tools");
  const paths = readdirSync(path)
    .filter((v) => !v.startsWith("index"))
    .map((v) => v.replace(".tsx", ""));

  return {
    props: {
      tools: paths,
    },
  };
};
