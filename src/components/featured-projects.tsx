import { Project } from "types/Project";
import { Link } from "./blog/markdown/Link";

export const FeaturedProjectsSection = ({ projects }: { projects: Project[] }) => {
  const featuredProjects = projects.filter((v) => v.isFeatured);

  return (
    <section className="pb-5 mt-14" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <ul className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
};

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="flex flex-col justify-between p-4 py-6 rounded-md shadow-sm bg-secondary/20 cursor-default">
      <h3 className="text-2xl font-semibold">{project.title}</h3>

      <p className="my-3 text-secondary">{project.description}</p>

      <ul className="flex gap-1 mt-2">
        {project.buttons.map((button) => (
          <li key={button.name}>
            <Link
              href={button.url}
              className="p-2 px-3.5 rounded-md transition bg-secondary/70 hover:bg-secondary/90 text-white"
            >
              {button.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
