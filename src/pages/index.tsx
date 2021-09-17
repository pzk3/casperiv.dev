import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import { motion } from "framer-motion";
import Link from "next/link";
import { TimelineSection } from "@sections/TimelineSection";
import { ProjectSection } from "@sections/ProjectsSection";
import { ContactSection } from "@sections/ContactSection";
import { SkillsSection } from "@sections/SkillsSection";
import { ContactIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from "@icons/about";
import { Seo } from "@components/Seo";
import mainStyles from "css/main.module.scss";

const LINKS = [
  {
    name: "Contact",
    href: "#contact",
    Icon: ContactIcon,
  },
  {
    name: "GitHub",
    href: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
    Icon: GitHubIcon,
  },
  {
    name: "Twitter",
    href: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL,
    Icon: TwitterIcon,
  },
  {
    name: "LinkedIn",
    href: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
    Icon: LinkedInIcon,
  },
];

const Index = () => {
  const age = calculateAge();
  const { dispatch } = useEmitEvent("focusOnContact", true);

  function calculateAge() {
    return ((Date.now() - new Date("07/21/2005").getTime()) / (60 * 60 * 24 * 365.25 * 1000))
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
          Hello, I am Casper! I am a {age} year old programmer and student based in Belgium. I
          create websites, Discord bots, npm packages, etc. I&apos;m a self taught developer and I
          have been programming for about 2 years and still learning new technologies every day,
          mostly focusing on frontend related technologies.{" "}
          <Link href="/about">
            <a>Read more.</a>
          </Link>
        </p>

        <div className={mainStyles.btnContainer}>
          {LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              initial={{
                opacity: 0,
                translateY: -10,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{ duration: 0.3, delay: 0.1 * idx }}
              onClick={link.name === "Contact" ? dispatch : null}
              className="btn btn__light btn__icon"
              href={link.href}
            >
              <link.Icon />
              {link.name}
            </motion.a>
          ))}
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
