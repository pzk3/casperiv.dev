"use client";

import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ArrowRight } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export function HeroSection() {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <section className="relative flex flex-col justify-center mx-auto max-w-layout px-5 xl:px-0 mb-40">
      <div className="py-28 mt-20 flex flex-col ">
        <h1 className="font-title relative text-5xl font-black sm:text-7xl md:text-8xl lg:text-9xl text-secondary">
          frontend <br /> web <br /> developer
          <motion.span
            transition={{ type: "spring", duration: 0.5 }}
            initial={{ y: 0, x: 0 }}
            animate={{ y: 6, x: 6 }}
            className="font-title select-none absolute -z-10 left-0 top-0 text-accent/50 text-5xl font-black sm:text-7xl md:text-8xl lg:text-9xl"
          >
            frontend <br /> web <br /> developer
          </motion.span>
        </h1>
        <div className="flex gap-10 items-center my-10">
          <p className="text-secondary text-base font-medium leading-none min-w-fit">
            Student developer @ Stampix
          </p>
        </div>
      </div>

      <div className="mt-20 flex items-start gap-10">
        <div className="mt-20">
          <h2 className="font-title font-extrabold text-4xl md:text-5xl lg:text-6xl">
            Hello! {"I'm Casper"}
          </h2>
          <p className="max-w-2xl text-secondary-light mt-5">
            I am a highly motivated programmer and student from Belgium. I have been teaching myself
            to code for {formatDistanceToNow(started)} and am constantly learning new technologies,
            with a focus on frontend development.
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
