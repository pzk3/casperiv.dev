import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import readingTime from "reading-time";

const baseFields = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  createdAt: { type: "date", required: true },
  updatedAt: { type: "date", required: false },
  featured: { type: "boolean", required: false },
  archived: { type: "boolean", required: false },
  readingTime: { type: "string", required: false },
  keywords: { type: "list", of: { type: "string" }, required: false },
};

/** @type {import("contentlayer/source-files").ComputedFields<"BlogPost">} */
const baseComputedFields = {
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.createdAt,
      dateModified: doc.updatedAt,
      description: doc.description,
      keywords: doc.keywords,
      url: `https://casperiv.dev/blog/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Casper Iversen",
        url: "https://casperiv.dev",
      },
    }),
  },
};

export const CodeSnippet = defineDocumentType(() => ({
  name: "CodeSnippet",
  filePathPattern: "**/snippets/**/*.mdx",
  contentType: "mdx",
  fields: baseFields,
  computedFields: baseComputedFields,
}));

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: "**/posts/**/*.mdx",
  contentType: "mdx",
  fields: baseFields,
  computedFields: {
    ...baseComputedFields,
    computedReadingTime: {
      type: "string",
      resolve: (doc) => {
        return readingTime(doc.body.raw).text;
      },
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "**/project/**/*.mdx",
  contentType: "mdx",
  fields: baseFields,
  computedFields: baseComputedFields,
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [BlogPost, CodeSnippet, Project],
  mdx: {
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
      };

      return options;
    },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { properties: { ariaLabel: "Link to section" } }],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }

            node.properties["data-line"] = true;
          },
          onVisitHighlightedLine(node) {
            node.properties["data-line-highlighted"] = true;
          },
          onVisitHighlightedChars(node) {
            node.properties["data-word-highlighted"] = true;
          },
        },
      ],
    ],
  },
});
