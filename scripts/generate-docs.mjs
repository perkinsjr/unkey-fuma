import * as OpenAPI from "fumadocs-openapi";
import * as Typescript from "fumadocs-typescript";
import * as path from "node:path";

void OpenAPI.generateFiles({
  input: ["./*.json"],
  output: "../content/docs/",
  per: "tag",
  frontmatter: (title) => ({
    toc: false,
    title: `${title[0].toUpperCase()}${title.slice(1)}`,
  }),
});

void Typescript.generateFiles({
  input: ["../content/docs/**/*.model.mdx"],
  output: (file) =>
    path.resolve(
      path.dirname(file),
      `${path.basename(file).split(".")[0]}.mdx`,
    ),
});
