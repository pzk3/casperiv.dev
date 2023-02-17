import { ProjectItem } from "components/featured-projects";
import Link from "next/link";
import { DEFAULT_KEYWORDS } from "next-seo.config";

async function fetchProjects() {
  const { projects } = await import("../../data/projects");

  return {
    projects,
  };
}

const pageDescription = "A list of my projects that I'm most proud of.";

export const metadata = {
  title: "Projects",
  description: pageDescription,
  alternates: {
    canonical: "https://caspertheghost.me/projects",
  },
  openGraph: {
    title: "Projects",
    description: pageDescription,
  },
  twitter: {
    title: "Projects",
    description: pageDescription,
  },
  keywords: [
    ...DEFAULT_KEYWORDS,
    "projects casper iversen",
    "caspertheghost projects",
    "react hooks",
  ],
};

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
