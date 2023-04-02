"use client";

import { motion } from "framer-motion";
import { HeroSectionPart } from "./svgs/hero-section-part";

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center mx-auto max-w-layout px-5 xl:px-0 mb-40">
      <div className="flex flex-row justify-between items-center">
        <div className="py-28 mt-20 flex flex-col">
          <h1 className="font-title relative text-5xl font-black xs:text-6xl sm:text-8xl md:text-9xl text-secondary">
            frontend <br /> web <br /> developer
            <motion.span
              transition={{ type: "spring", duration: 0.5 }}
              initial={{ y: 0, x: 0 }}
              animate={{ y: 6, x: 6 }}
              className="font-title select-none absolute -z-10 left-0 top-0 text-accent/50 text-5xl xs:text-6xl font-black sm:text-8xl md:text-9xl"
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

        <HeroSectionPart />
      </div>
    </section>
  );
}
