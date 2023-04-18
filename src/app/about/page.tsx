import ronin from "ronin";
import { mergeSeo } from "lib/merge-seo";
import { Timelineitems } from "@ronin/casper";
import { HorizontalScroll } from "~/components/sections/about/horizontal-scroll";
import { Timeline } from "~/components/sections/about/timeline";

export const revalidate = 600; // 10 minutes

async function fetchTimelineData() {
  const [timelineItems] = await ronin<Timelineitems>(({ get }) => {
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
    <main className="mt-[clamp(64px,10%,192px)] ">
      <section className="mx-auto max-w-6xl w-full pb-32 px-5 md:px-0">
        <h1 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Who am I?
        </h1>

        <div className="max-w-xl">
          <p className="mt-10">
            Hey there! {"Let's"} get straight to it! {"I'm"} Casper, a motivated frontend developer
            and student based in Belgium. I started back when I was a 14-year-old kid that had an
            extreme passion for creating stuff, building simple static web pages and expanding my
            CSS knowledge by recreating awesome designs. {"I've"} continued to grow and evolve as a
            developer, taking on new challenges and learning the latest technologies along the way.
          </p>

          <p className="mt-4">
            Now, at the age of 18, four years after starting my web development journey, {"I'm"}{" "}
            building cutting-edge web applications using the latest technologies such as React.js,
            Next.js, TypeScript, and much more.
          </p>

          <p className="mt-4">
            When {"I'm"} not in full-on developer mode, you will find me blasting down a dirt track
            or the streets of my city. {"There's"} nothing quite like the rush of adrenaline that
            comes from going ultra-fast, and for me, {"there's"} no better way to experience that
            than on my trusty mountain bike.
          </p>
        </div>
      </section>

      {/* timeline section */}
      <HorizontalScroll
        headerRenderer={
          <>
            <h2 className="text-5xl md:text-6xl font-bold">Timeline</h2>
            <p className="text-lg font-medium max-w-lg mt-5 text-primary/80">
              I try to regularly update the timeline with new accomplishments and achievements.
            </p>
          </>
        }
      >
        <Timeline timelineData={timelineData} />
      </HorizontalScroll>
    </main>
  );
}
