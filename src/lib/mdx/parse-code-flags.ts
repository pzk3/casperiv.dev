import { Node } from "unist";
import { visit } from "unist-util-visit";
import parser from "yargs-parser";

export function parseCodeFlags() {
  return (tree: Node) =>
    visit(tree, "element", (node: any, _index, parent) => {
      if (!parent || node.tagName !== "pre") {
        return;
      }

      const pre = node;
      const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;
      const meta: string = code.data?.meta;
      if (!meta) return;

      const options = parser(meta);
      pre.properties = options;
    });
}
