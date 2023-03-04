import ronin from "ronin";
import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";
import { Project } from "types/project";

export const revalidate = 3600; // 3600 seconds = 1 hour

async function getBackpackAndProjects() {
  const myBackpack = (await import("data/my-backpack")).myBackpack;

  const [featuredProjects] = await ronin<Project[]>(({ get }) => {
    get.projects = {
      orderedBy: { ascending: ["ronin.updatedAt"] },
      where: { isFeatured: { is: true } },
    };
  });

  return {
    myBackpack,
    projects: featuredProjects,
  };
}

export default async function App() {
  const { myBackpack, projects } = await getBackpackAndProjects();

  return (
    <>
      <HeroSection />
      <MyBackpackSection myBackpack={myBackpack} />
      <FeaturedProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
