import { CodeSnippet } from "contentlayer/generated";
import { usePathname } from "next/navigation";

interface Props {
  post: CodeSnippet;
}

const types = {
  "/blog/[slug]": "posts",
  "/snippets/[slug]": "snippets",
  "/case-study/[slug]": "case-studies",
};

export function BlogFooter({ post }: Props) {
  const pathname = usePathname();

  // todo: pathname doesn't work here
  const type = types[pathname as keyof typeof types];

  const GITHUB_REPO_LINK =
    "https://github.com/Dev-CasperTheGhost/caspertheghost.me/edit/main/src/data";
  const link = `${GITHUB_REPO_LINK}/${type}/${post._raw.flattenedPath}`;

  return (
    <footer className="flex justify-end pt-12 pb-2 mb-5 border-b border-secondary">
      <a className="hover:underline" href={link}>
        Edit On GitHub
      </a>
    </footer>
  );
}
