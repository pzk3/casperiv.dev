import readingTime from "reading-time";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { bundleMDX } from "mdx-bundler";
import { Post } from "types/Post";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";

export function getSlugsFromDir(dir: string): string[] {
  return readdirSync(dir);
}

export type Fields<T> = (keyof T)[];
export type PickT<T> = Pick<T, keyof T>;
type Types = "posts" | "snippets" | "case-studies";

export async function getAllItems<T extends Post>(
  type: Types,
  fields: Fields<T> = [],
): Promise<PickT<T>[]> {
  const slugs = getSlugsFromDir(join(process.cwd(), "src", "data", type)).filter((v) =>
    /\.mdx?$/.test(v),
  );

  const posts = await Promise.all(slugs.map(async (slug) => getItemBySlug<T>(slug, type, fields)));

  posts.sort((post1, post2) => (new Date(post1.createdAt) > new Date(post2.createdAt) ? -1 : 1));

  return posts as unknown as Pick<T, keyof T>[];
}

export async function getItemBySlug<T = unknown>(
  slug: string,
  type: Types,
  fields: Fields<T> = [],
): Promise<PickT<T>> {
  const dir = join(process.cwd(), "src", "data", type);
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(dir, `${realSlug}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const { code: content, frontmatter } = await bundleMDX(fileContents, {
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];

      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypeSlug, rehypeCodeTitles];

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

  const { text } = readingTime(content);

  return fields.reduce((acc, curr) => {
    if (curr === "slug") return { ...acc, slug: realSlug };
    if (curr === "content") return { ...acc, content };
    if (curr === "readingTime") return { ...acc, readingTime: text };
    if (curr === "frontmatter") return { ...acc, frontmatter };

    return { ...acc, [curr]: frontmatter[curr as string] ?? null };
  }, {} as PickT<T>);
}
