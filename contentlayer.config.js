import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const CodeSnippet = defineDocumentType(() => ({
  name: "CodeSnippet",
  filePathPattern: "**/snippets/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    intro: { type: "string", required: true },
    createdAt: { type: "date", required: true },
    readingTime: { type: "string", required: false },
    // keywords: { type: "list", default: [] },
  },
  // computedFields: {
  //   url: {
  //     type: "string",
  //     resolve: (post) => `/snippets/${post._raw.flattenedPath}`,
  //   },
  // },
}));

export default makeSource({
  contentDirPath: "./src/data",
  documentTypes: [CodeSnippet],
});
