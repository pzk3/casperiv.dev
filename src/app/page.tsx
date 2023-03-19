import ronin from "ronin";
import type { Projects } from "@ronin/casper";
import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";
import { BackpackItem } from "types/backpack-item";

export const revalidate = 600; // 10 minutes

async function getBackpackAndProjects() {
  const [featuredProjects, myBackpack] = await ronin<[Projects, BackpackItem[]]>(({ get }) => {
    get.projects = {
      orderedBy: { ascending: ["ronin.updatedAt"] },
      where: { isFeatured: { is: true } },
    };

    get.mySkills = {
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
