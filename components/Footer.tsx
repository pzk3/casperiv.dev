const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__icon">
          <img src="/icons/icon-1080.png" alt="footer" width="100" height="100" />
        </div>

        <p>
          Created by{" "}
          <a href="https://github.com/dev-caspertheghost/caspertheghost.me">CasperTheGhost</a> with
          ❤️
        </p>

        <div className="footer__links">
          <a target="_blank" rel="noreferrer noopener" href={process.env.TWITTER_PROFILE_URL}>
            Twitter
          </a>
          <a target="_blank" rel="noreferrer noopener" href={process.env.GITHUB_PROFILE_URL}>
            GitHub
          </a>
          <a target="_blank" rel="noreferrer noopener" href={process.env.LINKEDIN_PROFILE_URL}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
