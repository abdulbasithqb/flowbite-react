// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import toc from "markdown-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
    toc: {
      type: "markdown",
      resolve: (doc) => toc(doc.body.raw).content
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypePrismPlus]
  }
});
export {
  Doc,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-F5OYDOGZ.mjs.map
