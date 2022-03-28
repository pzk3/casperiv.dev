export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full sm:h-40 px-5 pb-10 sm:pb-5 pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:h-40 max-w-4xl">
        <p className="text-center sm:text-left mb-5">
          Created by{" "}
          <FooterLink href="https://github.com/dev-caspertheghost/caspertheghost.me">
            CasperTheGhost
          </FooterLink>{" "}
          with ❤️
          <br />
          Built with <FooterLink href="https://nextjs.org">Next.js</FooterLink>
        </p>

        <div className="flex flex-col md:flex-row md:gap-2">
          <FooterLink href="https://twitter.com/casper124578">Twitter</FooterLink>
          <FooterLink href="https://github.com/dev-caspertheghost">GitHub</FooterLink>
          <FooterLink href="https://www.linkedin.com/in/casper-iversen">LinkedIn</FooterLink>
          <FooterLink href="https://npmjs.org/~casper124578">npm</FooterLink>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: string;
}

function FooterLink({ children, href }: FooterLinkProps) {
  return (
    <a className="underline" target="_blank" rel="noreferrer noopener" href={href}>
      {children}
    </a>
  );
}
