import { HeroSection } from "components/hero-section";
import { Layout } from "components/layout";
import { MyBackpackSection } from "components/my-backpack-section";
import { GetStaticProps } from "next";
import { FeaturedProjectsSection } from "components/featured-projects";
import { Project } from "types/Project";
import { ContactSection } from "components/contact-section";

interface Props {
  projects: Project[];
  myBackpack: [string, string[]][];
}

export default function Home({ myBackpack, projects }: Props) {
  return (
    <Layout>
      <HeroSection />
      <MyBackpackSection myBackpack={myBackpack} />
      <FeaturedProjectsSection projects={projects} />
      <ContactSection />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const myBackpack = (await import("data/my-backpack")).myBackpack;
  const projects = (await import("data/projects")).projects;

  return {
    props: {
      myBackpack,
      projects,
    },
  };
};
