import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getSlugsFromDir(dir: string): string[] {
  return fs.readdirSync(dir);
}

export type Fields<T> = (keyof T)[];
type Types = "posts" | "snippets";

export function getAllItems<T = unknown>(type: Types, fields: Fields<T> = []): Pick<T, keyof T>[] {
  const slugs = getSlugsFromDir(join(process.cwd(), "src", "data", type));

  const posts = slugs
    .map((slug) => getItemBySlug<T>(slug, type, fields))
    // @ts-expect-error ignore
    .sort((post1, post2) => (new Date(post1.created_at) > new Date(post2.created_at) ? -1 : 1));

  return (posts as unknown) as Pick<T, keyof T>[];
}

export function getItemBySlug<T = unknown>(
  slug: string,
  type: Types,
  fields: Fields<T> = [],
): Pick<T, keyof T> {
  const dir = join(process.cwd(), "src", "data", type);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: T = ({
    title: null,
    created_at: null,
    intro: null,
    slug: null,
    content: null,
    keywords: null,
    updated_at: null,
  } as unknown) as T;

  fields.forEach((field) => {
    if (field === "slug") {
      items[field as string] = realSlug;
    }
    if (field === "content") {
      items[field as string] = content;
    }

    if (data[field as string]) {
      items[field] = data[field as string];
    }
  });

  return items;
}
