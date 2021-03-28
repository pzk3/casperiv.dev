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

const SkillsSection: FC = () => {
  return (
    <section id="skills">
      <h1 className="section__title">My Backpack</h1>

      <div className="skills__icons">
        <button aria-label="HTML - Expert" className="skills__icon tooltip">
          <HtmlIcon />
        </button>
        <button aria-label="CSS - Expert" className="skills__icon tooltip">
          <CSSIcon />
        </button>
        <button aria-label="JavaScript - Expert" className="skills__icon tooltip lg">
          <JavaScriptIcon />
        </button>
        <button aria-label="TypeScript - Expert" className="skills__icon tooltip lg">
          <TypescriptIcon />
        </button>
        <button aria-label="React - Intermediate" className="skills__icon tooltip lg">
          <ReactIcon />
        </button>
        <button aria-label="BootStrap - Intermediate" className="skills__icon tooltip lg">
          <BootstrapIcon />
        </button>
        <button aria-label="NodeJs - Intermediate" className="skills__icon tooltip lg">
          <NodejsIcon />
        </button>
        <button aria-label="MongoDB - Intermediate" className="skills__icon tooltip lg">
          <DatabaseIcon />
        </button>
        <button aria-label="NPM - Expert" className="skills__icon tooltip">
          <NpmIcon />
        </button>

        <button aria-label="Terminal - Intermediate" className="skills__icon tooltip lg">
          <TerminalIcon />
        </button>

        <button aria-label="GIT & GitHub - Intermediate" className="skills__icon tooltip lg">
          <GitIcon />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
