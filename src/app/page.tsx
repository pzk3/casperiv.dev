import { MyBackpackSection } from "~/components/sections/backpack-section";
import { HeroSection } from "~/components/sections/hero-section";
import ronin from "ronin";
import { MySkills, Projects } from "@ronin/casper";
import { ProjectsSection } from "~/components/sections/projects-section";
import { LatestBlogPosts } from "~/components/sections/latest-blog-posts";
import { ContactSection } from "~/components/sections/contact-section";

async function fetchHomePageData() {
  const [backpack, featuredProjects] = await ronin<[MySkills, Projects]>(({ get }) => {
    get.mySkills = { orderedBy: { ascending: ["ronin.createdAt"] } };
    get.projects = {
      orderedBy: { ascending: ["featuredPosition"] },
      where: { isFeatured: { is: true } },
    };
  });
  return { backpack, featuredProjects };
}

export default async function Home() {
  const { backpack, featuredProjects } = await fetchHomePageData();

  return (
    <main>
      <HeroSection />
      <MyBackpackSection backpack={backpack} />
      <ProjectsSection featuredProjects={featuredProjects} />
      <LatestBlogPosts />
      <ContactSection />
    </main>
  );
}
