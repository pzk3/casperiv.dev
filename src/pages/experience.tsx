import { NextPage } from "next";
import experience from "../data/experience";
import Experience from "types/Experience";
import styles from "css/experience.module.scss";
import Seo from "@components/Seo";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Seo
        title="Experience - Casper Iversen"
        keywords={["CasperTheGhost experience", "experience casper iversen"]}
        url="https://caspertheghost.me/experience"
        description="My experience - Casper Iversen"
      />

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
