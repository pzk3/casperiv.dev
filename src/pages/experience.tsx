import { NextPage } from "next";
import Head from "next/head";
import experience from "../data/experience";
import Experience from "types/Experience";
import styles from "css/experience.module.scss";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience - Casper Iversen</title>
        <meta property="og:title" content="Experience - Casper Iversen" />
        <meta name="description" content="Hi I'm Casper Iversen! A Frontend Web Developer." />
        <meta
          property="og:description"
          content="Hi I'm Casper Iversen! A Frontend Web Developer."
        />
        <meta
          name="twitter:description"
          content="Hi I'm Casper Iversen! A Frontend Web Developer."
        />
        <meta name="keywords" content="CasperTheGhost experience, experience casper iversen" />
        <link rel="canonical" href="https://caspertheghost.me/experience" />
      </Head>

      <div>
        <h1>My Experience</h1>
        {experience.map((item) => {
          return <ExperienceItem key={item.title} item={item} />;
        })}
      </div>
    </>
  );
};

interface Props {
  item: Experience;
}

export const ExperienceItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={styles.experience__item}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.href}
        className={styles.experience__title}
      >
        <h1>{item.title}</h1>
        <p>{item.year}</p>
      </a>
      <div className={styles.experience__desc}>{item.description}</div>
      <footer className={styles.experience__stack__container}>
        {item.stack.map((st) => (
          <span key={st} className={styles.experience__stack}>
            {st}
          </span>
        ))}
      </footer>
    </div>
  );
};

export default ExperiencePage;
