"use client";

import Link from "next/link";
import { Age } from "./age";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export function HeroSection() {
  const started = new Date("2019-08-08");

  return (
    <section className="relative flex flex-col justify-center mx-auto max-w-layout my-7 lg:my-20">
      {/* todo: cool title from framer-motion :) */}
      <h2 className="font-black text-4xl md:text-5xl lg:text-6xl font-title mb-4">This is me</h2>

      <div className="max-w-3xl mt-5 text-secondary-light">
        <p>
          Hello, I am Casper! {"I'm"} a <Age />
          -year-old developer and student from Belgium. I adore building <b>accessible</b>,{" "}
          <b>responsive</b> and <b>performant</b> code. Furthermore, {"I'm"} also a huge fan of{" "}
          <b>open-source</b>, I contribute to open-source where possible, I also have{" "}
          <Link
            className="underline hover:text-neutral-900"
            href="https://github.com/dev-caspertheghost?tab=repositories"
          >
            <b>many open-source projects</b>
          </Link>
          .
        </p>
        <p className="mt-5">
          I have been building web applications, Discord bots and much more for{" "}
          {formatDistanceToNow(started)} and love it! I try to learn something new every week.{" "}
          {"I'm"}
          currently focusing on <b>Frontend Web Development</b> and a little bit on{" "}
          <b>Web Design</b>.
        </p>
        <p className="mt-5">
          When {"I'm"} not coding or designing, I spend my time outdoors and love nothing more than{" "}
          <b>skiing</b> and <b>mountain biking</b>.
        </p>
      </div>
    </section>
  );
}
