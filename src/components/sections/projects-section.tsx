"use client";

import * as React from "react";
import { Projects } from "@ronin/casper";
import { Link } from "~/components/link";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import { Button } from "~/components/button";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProjectsSectionProps {
  featuredProjects: Projects;
}

export function ProjectsSection(props: ProjectsSectionProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
    <section className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0 overflow-x-hidden">
      <header className="flex flex-col gap-y-5 sm:flex-row sm:items-center justify-between">
        <h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
          Projects<span className="text-accent">.</span>
        </h2>

        <Link className="max-w-fit" intent="secondary" extras="icon" href="/projects">
          Explore more projects
          <ArrowRightShort width={25} height={25} />
        </Link>
      </header>

      <Carousel
        selectedItem={currentIndex}
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        emulateTouch={false}
      >
        {props.featuredProjects.map((project, idx) => {
          return (
            <article
              key={project.id}
              className="mt-20 flex flex-col md:flex-row gap-10 items-center w-full px-3"
            >
              <Image
                width={500}
                height={350}
                alt={project.title}
                draggable={false}
                className="rounded-2xl shadow-md w-1/2 max-w-2xl md:h-80 object-cover"
                src={project.coverImage.src}
                placeholder="blur"
                blurDataURL={project.coverImage.placeholder.base64}
              />

              <div className="flex flex-col w-full text-left">
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
                    href={`/project/${project.slug}`}
                  >
                    View full project
                    <ArrowRightShort width={25} height={25} />
                  </Link>

                  <div className="flex gap-x-1">
                    <Button
                      aria-label="Previous Project"
                      onClick={prevSlide}
                      intent="secondary"
                      size="square"
                    >
                      <ArrowLeftShort width={25} height={25} />
                    </Button>
                    <Button aria-label="Next Project" onClick={nextSlide} size="square">
                      <ArrowRightShort width={25} height={25} />
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </Carousel>
    </section>
  );
}
