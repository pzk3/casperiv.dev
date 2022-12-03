import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";

export async function getBackpackAndProjects() {
  const myBackpack = (await import("data/my-backpack")).myBackpack;
  const projects = (await import("data/projects")).projects;

  return {
    myBackpack,
    projects,
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
