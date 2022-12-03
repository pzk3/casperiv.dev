import { Age } from "components/age";
import { Timeline } from "components/timeline/timeline";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import Link from "next/link";

async function fetchTimelineData() {
  const timelineData = (await import("../../data/timeline")).timeline;

  return {
    timelineData,
  };
}

export default async function AboutPage() {
  const { timelineData } = await fetchTimelineData();
  const started = new Date("2019-08-08");

  return (
    <>
      <section id="about">
        <h1 className="section-title">About Me</h1>

        <div className="max-w-3xl mt-5 text-secondary-light">
          <p>
            Hello, I am Casper! {"I'm"} a <Age />
            -year-old programmer and student based in Belgium. I adore building accessible,
            responsive and fast code. Furthermore, {"I'm"} also a big fan of open-source, I
            contribute to open-source as much as I can, I also have{" "}
            <Link
              className="underline"
              href="https://github.com/dev-caspertheghost?tab=repositories"
            >
              many open-source projects
            </Link>
            .
          </p>
          <p className="mt-5">
            I have been developing web applications, Discord bots and npm packages for{" "}
            {formatDistanceToNow(started)} and love it! I learn something new almost every day!
            Currently, {"I'm"} focusing on frontend web development, specifically working with
            React.js, TypeScript, CSS, HTML and much more!
          </p>
          <p className="mt-5">
            When {"I'm"} not programming or in school, I enjoy going mountain biking. I also love
            skiing!
          </p>
          <p className="mt-5 text-base italic">
            PS: If there is something that {"you'd"} like to know more about me, {"don't"} hesitate
            to{" "}
            <Link className="underline" href="/#contact">
              contact me
            </Link>
            !
          </p>
        </div>
      </section>

      <section className="mt-10" id="timeline">
        <h2 className="section-title">Timeline</h2>

        <Timeline timelineData={timelineData} />
      </section>
    </>
  );
}
