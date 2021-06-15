import experience from "../data/experience";
import Experience from "types/Experience";
import styles from "css/experience.module.scss";
import Seo from "@components/Seo";

const ExperiencePage = () => {
  return (
    <>
      <Seo
        title="Experience - Casper Iversen"
        keywords={["CasperTheGhost experience", "experience casper iversen"]}
        url="https://caspertheghost.me/experience"
        description="My experience - Casper Iversen"
      />

      <div className={styles.header}>
        <h1>My Experience</h1>
        <p>The list below shows my most active experiences starting from 2018.</p>

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

export const ExperienceItem = ({ item }: Props) => {
  return (
    <div className={styles.experienceItem}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.href}
        className={styles.experienceTitle}
      >
        <h1>{item.title}</h1>
        <p>{item.year}</p>
      </a>
      <div className={styles.experienceDesc}>{item.description}</div>
      <footer className={styles.experienceStackContainer}>
        {item.stack.map((st) => (
          <span key={st} className={styles.experienceStack}>
            {st}
          </span>
        ))}
      </footer>
    </div>
  );
};

export default ExperiencePage;
