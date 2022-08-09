import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ArrowRight } from "react-bootstrap-icons";

export const HeroSection = () => {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <section className="flex flex-col justify-center mx-auto min-h-[40em]" id="top">
      <div>
        <h4 className="text-2xl sm: md:text-3xl mb-3 text-neutral-700 dark:text-[#CDD6E2]">
          <span className="inline-block animate-wave" aria-label="Waving" role="img">
            👋
          </span>{" "}
          Hello! I am
        </h4>
        <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
          Casper<span className="hidden xs:inline"> Iversen</span>,
        </h1>
        <h2 className="mt-2 text-4xl font-medium sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
          and {"I'm"} a web developer.
        </h2>
      </div>

      <p className="max-w-3xl mt-8 text-neutral-800 dark:text-gray-300 md:text-xl">
        I am an extremely motivated programmer and student from Belgium. {"I'm"} a self-taught
        developer and have been programming for {formatDistanceToNow(started)} and {"I'm"} still
        learning new technologies every week, mostly focusing on frontend related technologies.{" "}
      </p>

      <div className="mt-4 flex gap-2 h-9">
        <Link href="https://github.com/sponsors/Dev-CasperTheGhost">
          <a className="flex w-fit items-center gap-2 rounded-md transition-colors py-2 px-3 bg-gray-300 dark:bg-blue-3 focus:bg-gray-400/80 hover:bg-gray-400/80 hover:dark:bg-blue-4 group">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="fill-[#d25e9c] group-hover:scale-110 transition-transform duration-200"
            >
              <path
                fillRule="evenodd"
                d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"
              />
            </svg>
            Sponsor
          </a>
        </Link>

        <Link href="/about">
          <a className="flex items-center gap-2 rounded-md transition-colors py-2 px-3 bg-gray-300 dark:bg-blue-3 focus:bg-gray-400/80 hover:bg-gray-400/80 hover:dark:bg-blue-4 group">
            About me
            <ArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </Link>
      </div>
    </section>
  );
};
