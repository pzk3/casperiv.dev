import projects from "../data/projects";
import Project from "../interfaces/Project";

const ProjectSection = () => {
  return (
    <section id="projects">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={`${process.env.GITHUB_PROFILE_URL}?tab=repositories`}
      >
        <h1 className="section__title">Projects</h1>
      </a>

      <div className="projects__container">
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
    <div className="project__item">
      <header className="project__item__header">{project.title}</header>

      <div className="project__item__body">
        <p>{project.description}</p>
      </div>

      <footer className="project__item__footer">
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
