import { Header } from "~/components/header";
import { MyBackpackSection } from "~/components/sections/backpack-section";
import { HeroSection } from "~/components/sections/hero-section";
import ronin from "ronin";
import { MyBackpack, Projects } from "@ronin/casper";
import { ProjectsSection } from "~/components/sections/projects-section";
import { LatestBlogPosts } from "~/components/sections/latest-blog-posts";

async function fetchHomePageData() {
  const [backpack, featuredProjects] = await ronin<[MyBackpack[], Projects]>(({ get }) => {
    get.mySkills = { orderedBy: { ascending: ["ronin.createdAt"] } };
    get.projects = {
      orderedBy: { ascending: ["ronin.updatedAt"] },
      where: { isFeatured: { is: true } },
    };
  });
  return { backpack, featuredProjects };
}

export default async function Home() {
  const { backpack, featuredProjects } = await fetchHomePageData();

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <MyBackpackSection backpack={backpack} />
        <ProjectsSection featuredProjects={featuredProjects} />
        <LatestBlogPosts />
      </main>
    </>
  );
}
