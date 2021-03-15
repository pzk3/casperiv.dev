import Head from "next/head";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import TimelineSection from "@sections/TimelineSection";
import ProjectSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import SkillsSection from "@sections/SkillsSection";
import { ContactIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@components/icons/about";

const Index: NextPage = () => {
  const [age, setAge] = useState<string>();

  useEffect(() => {
    // Thanks to https://ottomated.net/
    const calculatedAge = ((Date.now() - +new Date("07/21/2005")) / (60 * 60 * 24 * 365 * 1000))
      .toString()
      .split(".")[0];

    setAge(calculatedAge);

    setInterval(() => setAge(calculatedAge), 60_000);
  }, []);

  return (
    <>
      <main className="main" id="about">
        <Head>
          <title>Casper Iversen - Web Developer</title>
        </Head>
        <div className="main__title">
          <h1>I am Casper</h1>
          <h2>Frontend web developer</h2>
        </div>

        <p className="main__text">
          Hello, I am Casper! I am a {age} year old programmer and student. I enjoy programming a
          lot. I&apos;ve created websites, Discord bots, NPM packages, etc. I am a self taught
          developer and I have been programming for ~2 years now and still learning new technologies
          every day, mostly focusing on React, TypeScript and design.
        </p>

        <div className="btn__container">
          <a className="btn btn__light btn__icon" href="#contact">
            <ContactIcon />
            Contact
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
          >
            <TwitterIcon />
            Twitter
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn__light btn__icon"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </main>

      <SkillsSection />

      <ProjectSection />

      <TimelineSection />

      <ContactSection />
    </>
  );
};

export default Index;
