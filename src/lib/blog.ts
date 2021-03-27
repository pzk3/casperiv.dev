import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "types/Post";

export type Fields = (keyof Post)[];

const postsDir = join(process.cwd(), "src", "data", "posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug: string, fields: Fields = []): Pick<Post, keyof Partial<Post>> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post = {
    title: null,
    created_at: null,
    updated_at: null,
    slug: null,
    content: null,
    intro: null,
  };

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: Fields = []): Pick<Post, keyof Post>[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (new Date(post1.created_at) > new Date(post2.created_at) ? -1 : 1));
  return posts;
}
