import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface Post {
  title: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  slug: string | null;
  content: string | null;
  intro: string | null;
  keywords: string | null;
  readingTime: number;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}
