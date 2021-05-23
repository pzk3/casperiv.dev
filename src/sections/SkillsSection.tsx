import { FC } from "react";
import {
  BootstrapIcon,
  CSSIcon,
  DatabaseIcon,
  GitIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodejsIcon,
  NpmIcon,
  ReactIcon,
  TerminalIcon,
  TypescriptIcon,
} from "@icons/skills";
import styles from "css/skills.module.scss";
import { classes } from "src/lib/classes";

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h1 className="section__title">My Backpack</h1>

      <div className={styles.skillsIcons}>
        <button aria-label="HTML - Expert" className={classes(styles.skillsIcon, styles.tooltip)}>
          <HtmlIcon />
        </button>
        <button aria-label="CSS - Expert" className={classes(styles.skillsIcon, styles.tooltip)}>
          <CSSIcon />
        </button>
        <button
          aria-label="JavaScript - Expert"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <JavaScriptIcon />
        </button>
        <button
          aria-label="TypeScript - Expert"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <TypescriptIcon />
        </button>
        <button
          aria-label="React - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <ReactIcon />
        </button>
        <button
          aria-label="BootStrap - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <BootstrapIcon />
        </button>
        <button
          aria-label="NodeJs - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <NodejsIcon />
        </button>
        <button
          aria-label="MongoDB - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <DatabaseIcon />
        </button>
        <button aria-label="NPM - Expert" className={classes(styles.skillsIcon, styles.tooltip)}>
          <NpmIcon />
        </button>

        <button
          aria-label="Terminal - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <TerminalIcon />
        </button>

        <button
          aria-label="GIT & GitHub - Intermediate"
          className={classes(styles.skillsIcon, styles.tooltip, styles.lg)}
        >
          <GitIcon />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
