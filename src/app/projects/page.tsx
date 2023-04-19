import ronin from "ronin";

import Link from "next/link";
import { Project } from "types/project";
import { mergeSeo } from "lib/merge-seo";

export const revalidate = 600; // 10 minutes

async function fetchProjects() {
  const [projects] = await ronin<Project[]>(({ get }) => {
    get.projects = {
      orderedBy: {
        ascending: ["ronin.updatedAt"],
      },
      limitedTo: 1000,
    };
  });

  return {
    projects,
  };
}

const pageDescription = "A list of my projects that I'm most proud of.";

export const metadata = mergeSeo({
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
  keywords: ["projects casper iversen", "caspertheghost projects", "react hooks"],
});

export default async function ProjectsPage() {
  const { projects } = await fetchProjects();

  return (
    <>
      <h1 className="section-title">Projects</h1>

      <p className="mt-2 font-normal text-secondary-light">
        {pageDescription} All my projects are{" "}
        <Link className="underline" href="https://github.com/dev-caspertheghost?tab=repositories">
          available on GitHub
        </Link>
        .
      </p>

      <ul className="grid grid-cols-1 gap-3 mt-5 md:grid-cols-2"></ul>
    </>
  );
}
