import ronin from "ronin";
import { mergeSeo } from "lib/merge-seo";
import { Stackitems, Timelineitems } from "@ronin/casper";
import { HorizontalScroll } from "~/components/sections/about/horizontal-scroll";
import { Timeline } from "~/components/sections/about/timeline";
import { StackSection } from "~/components/sections/about/stack";
import { AboutHeroSection } from "~/components/sections/about/hero-section";

export const revalidate = 600; // 10 minutes

async function fetchTimelineData() {
  const [timelineItems, stackItems] = await ronin<[Timelineitems, Stackitems]>(({ get }) => {
    get.timelineItems = {
      limitedTo: 1000,
      orderedBy: { descending: ["year"] },
    };

    get.stackItems = {
      orderedBy: {
        ascending: ["name"],
      },
    };
  });

  return {
    stackItems,
    timelineData: timelineItems,
  };
}

export const metadata = mergeSeo({
  title: "About",
  description: "Get to know more about me and some of my accomplishments.",
  openGraph: {
    title: "About",
    description: "Get to know more about me and some of my accomplishments.",
  },
  twitter: {
    title: "About",
    description: "Get to know more about me and some of my accomplishments.",
  },
  alternates: {
    canonical: "https://caspertheghost.me/about",
  },
});

export default async function AboutPage() {
  const { timelineData, stackItems } = await fetchTimelineData();

  return (
    <main className="mt-[clamp(64px,10%,192px)] ">
      <AboutHeroSection />
      <StackSection stackItems={stackItems} />

      {/* timeline section */}
      <HorizontalScroll
        headerRenderer={
          <>
            <h2 className="text-5xl md:text-6xl font-bold">Timeline</h2>
            <p className="text-lg font-medium max-w-lg mt-5 text-primary/80">
              I try to regularly update the timeline with new accomplishments and achievements.{" "}
              <span className="text-base font-normal border-b border-accent/50">
                Start scrolling downwards to experience the timeline!
              </span>
            </p>
          </>
        }
      >
        <Timeline timelineData={timelineData} />
      </HorizontalScroll>
    </main>
  );
}
