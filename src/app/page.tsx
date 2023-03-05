import ronin from "ronin";
import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";
import { Project } from "types/project";
import { BackpackItem } from "types/backpack-item";

export const revalidate = 3600; // 3600 seconds = 1 hour

async function getBackpackAndProjects() {
  const [featuredProjects, myBackpack] = await ronin<[Project[], BackpackItem[]]>(({ get }) => {
    get.projects = {
      orderedBy: { ascending: ["ronin.updatedAt"] },
      where: { isFeatured: { is: true } },
    };

    get.mySkills = {
      // @ts-expect-error ignore for now. Slack
      orderedBy: { ascending: ["position"] },
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
