import { motion } from "framer-motion";
import Link from "next/link";
import { Seo } from "@components/Seo";
import { getMyAge } from "@lib/utils";
import mainStyles from "css/main.module.scss";
import styles from "css/about.module.scss";

const animationProps = {
  initial: { opacity: 0, translateY: 5 },
  animate: { opacity: 1, translateY: 0 },
};

const Index = () => {
  const age = getMyAge();

  return (
    <main className={mainStyles.main}>
      <Seo title="Casper Iversen - Web Developer" />

      <motion.h1 {...animationProps} style={{ marginBottom: "1rem" }}>
        A bit more about me 👨‍💻
      </motion.h1>

      <motion.div
        transition={{ duration: 0.2, delay: 0.1 }}
        {...animationProps}
        className={styles.aboutText}
      >
        <p>
          Hello, I am Casper! {"I'm"} a {age} year old programmer and student based in Belgium. I
          adore building accessible and fast code. {"I'm"} also a big fan of open-source, I
          contribute to open-source as much as I can, I also have{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dev-caspertheghost?tab=repositories"
          >
            many open-source projects
          </a>{" "}
          of my own.
        </p>

        <p style={{ marginTop: "0.5rem" }}>
          I have been developing web applications, Discord bots and npm packages for about 2 years
          and love it! {"I'm"} learning something new almost every day! I am currently focusing on
          frontend web development. Specifically working with React.js, TypeScript, CSS, HTML and
          much more!
        </p>

        <br />

        <p>
          I also like interacting with GitHub repositories to expand my knowledge about technologies
          and web development in general.
        </p>

        <br />

        <p>
          When {"I'm"} not programming or in school, I enjoy to go mountain biking in my local town.
          I also love skiing!
        </p>

        <br />

        <em>
          PS: If there is something that {"you'd"} like to know more about me, {"don't"} hesitate to{" "}
          <Link href="/#contact">
            <a>contact me</a>
          </Link>
          !
        </em>
      </motion.div>
    </main>
  );
};

export default Index;
