import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Created by{" "}
          <a href="https://github.com/dev-caspertheghost/caspertheghost.me">CasperTheGhost</a> with
          ❤️
          <br />
          Colors: GitHub dark mode. Built with <a href="https://nextjs.org">Next.js</a>
        </p>

        <div className={styles.footerLinks}>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL}
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL}
          >
            GitHub
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
