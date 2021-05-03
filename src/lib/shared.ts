import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "types/Post";

export function getSlugsFromDir(dir: string): string[] {
  return fs.readdirSync(dir);
}

export type Fields<T> = (keyof T)[];
export type PickT<T> = Pick<T, keyof T>;
type Types = "posts" | "snippets";

export function getAllItems<T extends Post>(type: Types, fields: Fields<T> = []): PickT<T>[] {
  const slugs = getSlugsFromDir(join(process.cwd(), "src", "data", type));

  const posts = slugs
    .map((slug) => getItemBySlug<T>(slug, type, fields))
    .sort((post1, post2) => (new Date(post1.created_at) > new Date(post2.created_at) ? -1 : 1));

  return (posts as unknown) as Pick<T, keyof T>[];
}

export function getItemBySlug<T = unknown>(
  slug: string,
  type: Types,
  fields: Fields<T> = [],
): PickT<T> {
  const dir = join(process.cwd(), "src", "data", type);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return fields.reduce((acc, curr) => {
    if (curr === "slug") return { ...acc, slug: realSlug };
    if (curr === "content") return { ...acc, content };

    return { ...acc, [curr]: data[curr as string] ?? null };
  }, {} as PickT<T>);
}
