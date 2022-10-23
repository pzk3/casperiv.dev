import { Layout } from "components/layout";
import { GetStaticProps } from "next";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { NextSeo } from "next-seo";
import { Project } from "types/Project";
import { ProjectItem } from "components/featured-projects";
import { Link } from "components/blog/markdown/Link";

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const pageTitle = "Projects - Casper Iversen";
  const pageDescription = "A list of my projects that I'm proud of.";

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: pageTitle,
          description: pageDescription,
        }}
        canonical="https://caspertheghost.me/projects"
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [
              ...DEFAULT_KEYWORDS,
              "projects casper iversen",
              "caspertheghost projects",
              "react hooks",
            ].join(", "),
          },
        ]}
      />

      <h1 className="text-3xl font-bold capitalize md:text-4xl">Projects</h1>

      <p className="mt-2 font-normal">
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
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { projects } = await import("../data/projects");

  return {
    props: { projects },
  };
};
