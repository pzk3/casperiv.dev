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
    <section className="w-full mx-auto max-w-layout">
      <header>
        <h2 className="section-title font-title">Writing</h2>
        <p className="text-secondary mt-5 max-w-lg">
          Sometimes I enjoy writing blog posts or code snippets. Here are the top 5 most viewed blog
          posts.
        </p>
      </header>

      <div>
        <div data-line className="w-full mt-5">
          <div aria-hidden className="max-w-[250px] w-full bg-accent rounded-md h-[3px]" />
        </div>

        <ul className="mt-7">
          {topBlogPosts.map((post) => (
            <li key={post.title}>
              <Link
                href={`/blog/${getArticleSlug(post)}`}
                className="flex items-center gap-5 my-3 group"
              >
                <p className="text-secondary-light text-sm min-w-fit">
                  {format(new Date(post.createdAt), "yyyy-MM-dd")}
                </p>

                <h3 className="font-medium text-base group-hover:underline group-hover:text-secondary">
                  {post.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
