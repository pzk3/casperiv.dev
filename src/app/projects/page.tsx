import { ProjectItem } from "components/featured-projects";
import Link from "next/link";
import { pageDescription } from "./head";

async function fetchProjects() {
  const { projects } = await import("../../data/projects");

  return {
    projects,
  };
}

export default async function ProjectsPage() {
  const { projects } = await fetchProjects();

  return (
    <>
      <h1 className="text-3xl font-bold capitalize md:text-4xl">Projects</h1>

      <p className="mt-2 font-normal text-secondary-light">
        {pageDescription} All my projects are{" "}
        <Link className="underline" href="https://github.com/dev-caspertheghost?tab=repositories">
          available on GitHub
        </Link>
        .
      </p>

      <ul className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2">
        {projects.map((project) => {
          if (project.title === "More projects") return null;

          return <ProjectItem key={project.title} project={project} />;
        })}
      </ul>
    </>
  );
}
