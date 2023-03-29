"use client";

import Link from "next/link";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ArrowRight } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export function HeroSection() {
  // this is roughly the date I started programing according to GitHub 😅!
  const started = new Date("2019-08-08");

  return (
    <section className="relative flex flex-col justify-center mx-auto max-w-layout px-5 md:px-0 mb-40">
      <div className="py-28 mt-20 flex flex-col ">
        <h1 className="relative text-5xl font-black sm:text-7xl md:text-8xl lg:text-9xl text-secondary">
          frontend <br /> web developer
          <motion.span
            transition={{ type: "spring", duration: 0.5 }}
            initial={{ y: 0, x: 0 }}
            animate={{ y: 6, x: 6 }}
            className="select-none absolute -z-10 left-0 top-0 text-accent/50 text-5xl font-black sm:text-7xl md:text-8xl lg:text-9xl"
          >
            frontend <br /> web developer
          </motion.span>
        </h1>
        <div className="flex gap-10 items-center my-10">
          <motion.div
            transition={{ duration: 1.5, type: "keyframes", ease: "easeOut" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            aria-hidden
            className="max-w-[12rem] w-full bg-accent rounded-md h-[3px]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.5 } }}
            className="text-secondary-light text-sm leading-none"
          >
            Student developer @ Stampix
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex items-start gap-10">
        <svg
          className="select-none"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="551"
          viewBox="0 0 500 551"
        >
          <g transform="translate(-145 -951)">
            <text
              transform="translate(145 1136)"
              fill="#366ca2"
              fontSize="150"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.75"
            >
              <tspan x="0" y="0">
                {"{"}
              </tspan>
            </text>
            <text
              transform="translate(533 1079)"
              fill="#366ca2"
              fontSize="100"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.8"
            >
              <tspan x="0" y="0">
                *
              </tspan>
            </text>
            <text
              transform="translate(367 1268)"
              fill="#366ca2"
              fontSize="110"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.4"
            >
              <tspan x="0" y="0">
                ===
              </tspan>
            </text>
            <text
              transform="translate(243 1343)"
              fill="#366ca2"
              fontSize="150"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.6"
            >
              <tspan x="0" y="0">
                {")"}
              </tspan>
            </text>
            <g transform="translate(378 1254)" opacity="0.8">
              <text
                transform="translate(0 184)"
                fill="#366ca2"
                fontSize="150"
                fontFamily="Cascadia Code"
                fontWeight="600"
              >
                <tspan x="0" y="0">
                  {"("}
                </tspan>
              </text>
            </g>
            <text
              transform="translate(339 1015)"
              fill="#366ca2"
              fontSize="120"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.6"
            >
              <tspan x="0" y="153">
                &quot;
              </tspan>
            </text>
            <text
              transform="translate(567 1310)"
              fill="#366ca2"
              fontSize="120"
              fontFamily="Cascadia Code"
              fontWeight="600"
              opacity="0.7"
            >
              <tspan x="0" y="153">
                &quot;
              </tspan>
            </text>
          </g>
        </svg>

        <div className="mt-20">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">Hello! {"I'm Casper"}</h2>
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
