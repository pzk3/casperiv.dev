import readingTime from "reading-time";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { bundleMDX } from "mdx-bundler";
import { Post } from "types/Post";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function getSlugsFromDir(dir: string): string[] {
  return readdirSync(dir);
}

export type Fields<T> = (keyof T)[];
type Types = "posts" | "snippets" | "case-studies";

interface GetAllProps {
  /** the type of item (blog post, snippet, case study) */
  type: Types;
  includeDrafts?: boolean;
  includeArchived?: boolean;
}

export async function getAllItems({
  type,
  includeDrafts = false,
  includeArchived = false,
}: GetAllProps): Promise<Post[]> {
  const typeDir = join(process.cwd(), "src", "data", type);
  const slugs = getSlugsFromDir(typeDir).filter((v) => /\.mdx?$/.test(v));

  let posts = await Promise.all(slugs.map(async (slug) => getItemBySlug(slug, type)));
  posts = posts.sort((post1, post2) =>
    new Date(post1.createdAt) > new Date(post2.createdAt) ? -1 : 1,
  );

  if (!includeArchived) {
    posts = posts.filter((v) => !v.archived);
  }

  if (!includeDrafts) {
    posts = posts.filter((v) => !v.draft);
  }

  return posts;
}

export async function getItemBySlug(slug: string, type: Types): Promise<Post> {
  const dir = join(process.cwd(), "src", "data", type);
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(dir, `${realSlug}.mdx`);

  const { code: content, frontmatter } = await bundleMDX({
    file: fullPath,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];

      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypeAutolinkHeadings,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      };

      return options;
    },
  });

  const { text } = frontmatter.readingTime
    ? { text: frontmatter.readingTime }
    : readingTime(content);

  return {
    slug: realSlug,
    content,
    readingTime: text,
    frontmatter,
    createdAt: frontmatter.createdAt,
    intro: frontmatter.intro,
    keywords: frontmatter.keywords ?? "",
    title: frontmatter.title,
    updatedAt: frontmatter.updatedAt ?? null,
    draft: frontmatter.draft ?? false,
    featured: frontmatter.featured ?? false,
    archived: frontmatter.archived ?? false,
  };
}
