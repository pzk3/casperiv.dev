import { Age } from "components/age";
import { Timeline } from "components/timeline/timeline";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";
import ronin from "ronin";
import { mergeSeo } from "lib/merge-seo";
import { TimelineItems } from "@ronin/casper";

export const revalidate = 600; // 10 minutes

async function fetchTimelineData() {
  const [timelineItems] = await ronin<TimelineItems>(({ get }) => {
    get.timelineItems = {
      limitedTo: 1000,
      orderedBy: { descending: ["year"] },
    };
  });

  return {
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
  const { timelineData } = await fetchTimelineData();

  return (
    <>
      <section className="mt-10" id="timeline">
        <h2 className="section-title">Timeline</h2>

        <Timeline timelineData={timelineData} />
      </section>
    </>
  );
}
