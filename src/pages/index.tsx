import * as React from "react";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import TimelineSection from "@sections/TimelineSection";
import ProjectSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import SkillsSection from "@sections/SkillsSection";
import { ContactIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@icons/about";
import Seo from "@components/Seo";
import mainStyles from "css/main.module.scss";

const Index = () => {
  const age = calculateAge();
  const { dispatch } = useEmitEvent("focusOnContact", true);

  function calculateAge() {
    return ((Date.now() - +new Date("07/21/2005")) / (60 * 60 * 24 * 365 * 1000))
      .toString()
      .split(".")[0];
  }

  return (
    <>
      <main className={mainStyles.main} id="about">
        <Seo title="Casper Iversen - Web Developer" />

        <div className={mainStyles.mainTitle}>
          <h1>I am Casper</h1>
          <h2>Frontend web developer</h2>
        </div>

        <p className={mainStyles.mainText}>
          Hello, I am Casper! I am a {age} year old programmer and student. I enjoy programming a
          lot. I&apos;ve created websites, Discord bots, npm packages, etc. I am a self taught
          developer and I have been programming for ~2 years and still learning new technologies
          every day, mostly focusing on React, TypeScript and design.
        </p>

        <div className={mainStyles.btnContainer}>
          <a onClick={dispatch} className="btn btn__light btn__icon" href="#contact">
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
