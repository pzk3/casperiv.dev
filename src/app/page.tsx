import ronin from "ronin";
import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";

export const revalidate = 3600; // 3600 seconds = 1 hour

async function getBackpackAndProjects() {
  const myBackpack = (await import("data/my-backpack")).myBackpack;

  const [projects] = await ronin<any>(({ get }) => {
    (get as any).projects;
  });

  console.log(projects);

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
