import * as React from "react";
import projects from "../data/projects";
import Project from "types/Project";
import styles from "css/projects.module.scss";

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="section__title">Projects</h1>

      <div className={styles.projectsContainer}>
        {projects.map((project: Project, idx: number) => {
          return <ProjectItem project={project} key={idx} />;
        })}
      </div>
    </section>
  );
};

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles.projectItem}>
      <header className={styles.projectItemHeader}>{project.title}</header>

      <div className={styles.projectItemBody}>
        <p>{project.description}</p>
      </div>

      <footer className={styles.projectItemFooter}>
        {project.buttons.map((button, idx: number) => {
          return (
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn__lighter"
              href={button.url}
              key={idx}
            >
              {button.name}
            </a>
          );
        })}
      </footer>
    </div>
  );
};

export default ProjectSection;
