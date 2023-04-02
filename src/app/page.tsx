import ronin from "ronin";
import type { GalleryImages, Projects } from "@ronin/casper";
import { ContactSection } from "components/contact-section";
import { FeaturedProjectsSection } from "components/featured-projects";
import { HeroSection } from "components/hero-section";
import { MyBackpackSection } from "components/my-backpack-section";
import { BackpackItem } from "types/backpack-item";
import { LatestGalleryImagesSection } from "components/latest-gallery-images-section";
import { WritingSection } from "components/writing-section";
import { ShortAboutSection } from "components/short-about-section";

export const revalidate = 600; // 10 minutes

async function getBackpackAndProjects() {
  const [featuredProjects, myBackpack, latestGalleryImages] = await ronin<
    [Projects, BackpackItem[], GalleryImages]
  >(({ get }) => {
    get.projects = {
      orderedBy: { ascending: ["ronin.updatedAt"] },
      where: { isFeatured: { is: true } },
    };

    get.mySkills = {
      orderedBy: { ascending: ["position"] },
    };

    get.galleryImages = {
      limitedTo: 6,
      orderedBy: { descending: ["ronin.updatedAt"] },
    };
  });

  return {
    myBackpack,
    projects: featuredProjects,
    latestGalleryImages,
  };
}

export default async function App() {
  const { myBackpack, projects, latestGalleryImages } = await getBackpackAndProjects();

  return (
    <>
      <HeroSection />
      <ShortAboutSection />
      <WritingSection />
      <MyBackpackSection myBackpack={myBackpack} />
      {/* <FeaturedProjectsSection projects={projects} />
      <LatestGalleryImagesSection latestGalleryImages={latestGalleryImages} />
      <ContactSection /> */}
    </>
  );
}
