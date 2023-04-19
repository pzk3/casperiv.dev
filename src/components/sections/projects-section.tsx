"use client";

import * as React from "react";
import { Projects } from "@ronin/casper";
import { Link } from "~/components/link";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import { Button } from "~/components/button";
import Image from "next/image";

interface ProjectsSectionProps {
  featuredProjects: Projects;
}

export function ProjectsSection(props: ProjectsSectionProps) {
  const carouselRef = React.useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft = carouselRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex, carouselRef]);

  function prevSlide() {
    setCurrentIndex((prevState) => {
      if (prevState <= 0) {
        return props.featuredProjects.length - 1;
      }
      return prevState - 1;
    });
  }

  function nextSlide() {
    setCurrentIndex((prevState) => {
      if (prevState >= props.featuredProjects.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  }

  return (
    <section className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0 touch-pan-y">
      <header className="flex flex-col gap-y-5 sm:flex-row sm:items-center justify-between">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Projects<span className="text-accent">.</span>
        </h2>

        <Link className="max-w-fit" intent="secondary" extras="icon" href="/projects">
          Explore more projects
          <ArrowRightShort width={25} height={25} />
        </Link>
      </header>

      <div
        ref={carouselRef}
        className="relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
      >
        {props.featuredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="mt-20 mx-3 flex flex-col md:flex-row gap-10 items-center w-full min-w-fit"
          >
            <Image
              width={500}
              height={350}
              alt={project.title}
              draggable={false}
              className="rounded-2xl shadow-md w-full max-w-1/3"
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            />

            <div className="flex flex-col w-full">
              <header className="flex flex-col-reverse">
                <h3 className="font-bold font-poppins text-4xl">{project.title}</h3>
                <h4 className="font-semibold text-2xl">0{++idx} —</h4>
              </header>

              <p className="mt-5 text-lg text-gray-light">{project.description}</p>

              <hr className="border-gray-light border w-full my-10" />

              <div className="flex gap-3 items-center justify-between">
                <Link
                  className="max-w-fit"
                  extras="icon"
                  intent="secondary"
                  href={`/projects/${project.id}`}
                >
                  View full project
                  <ArrowRightShort width={25} height={25} />
                </Link>

                <div className="flex gap-x-1">
                  <Button onClick={prevSlide} intent="secondary" size="square">
                    <ArrowLeftShort width={25} height={25} />
                  </Button>
                  <Button onClick={nextSlide} size="square">
                    <ArrowRightShort width={25} height={25} />
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
