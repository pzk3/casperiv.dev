import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ArrowRight } from "react-bootstrap-icons";

export function ShortAboutSection() {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <section className="flex flex-row relative h-[60em] w-full">
      <div className="flex flex-row h-[60em] absolute inset-0 -z-10">
        <div className="bg-[#EAF1F4] w-full md:w-1/2 h-full" />
        <div className="bg-accent w-1/2 hidden md:block h-full" />
      </div>

      <div className="max-w-layout w-full mx-auto px-5 md:px-0 flex flex-col justify-center">
        <div className="w-full md:w-1/2 pr-12">
          <h2 className="font-title font-extrabold text-4xl md:text-5xl lg:text-6xl">
            Hello! {"I'm Casper"}
          </h2>
          <p className="max-w-2xl text-secondary-light mt-5">
            I am a highly motivated programmer and student from Belgium. I adore building
            accessible, responsive and performant code. Furthermore, {"I'm"}
            also a huge fan of open-source.
          </p>
          <p className="max-w-2xl text-secondary-light mt-5">
            I have been building web apps, Discord bots and more for
            {formatDistanceToNow(started)} and still love it. I try to learn something new every
            week. {"I'm"} currently focusing on Frontend Web Development and Web Design.
          </p>

          <div className="mt-5">
            <Link
              className="rounded-full overflow-hidden border border-accent flex items-center w-[145px] max-w-[145px]"
              href="/about"
            >
              <span className="px-4 p-1.5 min-w-fit font-medium">About me</span>
              <span className="rounded-full bg-accent h-9 w-9 grid place-items-center">
                <ArrowRight className="fill-primary" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
