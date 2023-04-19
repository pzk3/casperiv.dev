"use client";

import * as React from "react";
import { Myskills } from "@ronin/casper";
import * as HoverCard from "@radix-ui/react-hover-card";
import { motion } from "framer-motion";

interface MyBackpackSectionProps {
  backpack: Myskills;
}

export function MyBackpackSection(props: MyBackpackSectionProps) {
  return (
    <section className="bg-secondary text-primary">
      <div className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0">
        <h2 className="font-poppins font-medium text-4xl relative max-w-fit">
          My evolving skillset
          <HoverCard.Root closeDelay={100} openDelay={0}>
            <HoverCard.Trigger
              className="leading-[0px] absolute -top-4 -right-6 grid items-center justify-center h-8 w-8 cursor-default"
              asChild
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 18.369 17"
                  className="fill-accent"
                >
                  <path
                    d="M14.732-4.435,9.686-11.782l2.82-2.208L18.5-7.366Zm-7.2,0L3.767-7.366l5.919-6.68,2.82,2.208Zm3.043-6.828-8.628-2.3,1.54-4.49,8.238,3.4ZM9.389-12.914,8.758-21.82h4.75l-.538,8.906Zm2.338,1.744-1.15-3.4,8.22-3.488,1.521,4.49Z"
                    transform="translate(-1.948 21.82)"
                  />
                </svg>
              </span>
            </HoverCard.Trigger>
            <HoverCard.Content
              asChild
              align="start"
              className="ml-3 border-2 border-gray-light bg-gray-dark shadow-md rounded-2xl font-normal p-2 px-3 text-base max-w-sm"
            >
              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: -5 }}>
                {"I'm"} open to exploring new technologies and techniques to expand my ever evolving
                skillset {";)"}.
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Root>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32 w-full">
          {props.backpack.map((item, idx) => {
            const allSkills = item.list.split("\n").filter(Boolean);

            return (
              <React.Fragment key={item.header}>
                <h3
                  key={item.header}
                  className="font-poppins text-5xl md:text-6xl font-bold lowercase md:h-32"
                >
                  <span className="inline-block w-[73px] text-start">0{++idx}</span> — {item.header}
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 max-w-md">
                  {allSkills.map((skill) => {
                    return (
                      <li className="font-poppins font-medium text-xl" key={skill}>
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
