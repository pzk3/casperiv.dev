import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import Link from "next/link";
import format from "date-fns/format";
const topArticleSlugs = [
  "how-to-setup-and-deploy-nextjs-ubuntu",
  "my-uses",
  "nextjs-with-preact",
  "nprogress-next-js",
  "how-to-create-an-npm-package-tsup-esm-cjs-nodejs",
];

export function WritingSection() {
  const topBlogPosts = allBlogPosts.filter((post) => {
    return topArticleSlugs.includes(getArticleSlug(post));
  });

  return (
    <section className="w-full bg-secondary py-24">
      <div className="w-full mx-auto max-w-layout flex items-start justify-between">
        <header>
          <h2 className="text-primary section-title">Writing</h2>
          <p className="text-secondary-dark mt-5 max-w-lg">
            Sometimes I enjoy writing blog posts or code snippets. Here are the top 5 most viewed
            blog posts.
          </p>
        </header>

        <div className="w-1/2">
          <div data-line className="w-full mt-10">
            <div aria-hidden className="max-w-[250px] w-full bg-accent rounded-md h-[3px]" />
          </div>

          <ul className="mt-7">
            {topBlogPosts.map((post) => (
              <li key={post.title}>
                <Link href="#" className="flex items-center gap-5 my-3 group">
                  <p className="text-secondary-dark-accent text-sm">
                    {format(new Date(post.createdAt), "yyyy-MM-dd")}
                  </p>

                  <h3 className="text-secondary-dark font-medium text-base group-hover:underline group-hover:text-primary">
                    {post.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
