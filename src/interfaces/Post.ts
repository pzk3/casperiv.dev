export interface Post {
  title: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  slug: string | null;
  content: string | null;
  intro: string | null;
  keywords: string | null;
  readingTime: number;
  draft: boolean;
  frontmatter: {
    [key: string]: any;
  };
}
