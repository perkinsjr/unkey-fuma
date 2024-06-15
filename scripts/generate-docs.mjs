import * as OpenAPI from "fumadocs-openapi";
import * as Typescript from "fumadocs-typescript";
import * as path from "node:path";

void OpenAPI.generateFiles({
  input: ["*.json"],
  output: "../content/docs/ui",
});

void Typescript.generateFiles({
  input: ["./content/docs/**/*.model.mdx"],
  output: (file) =>
    path.resolve(
      path.dirname(file),
      `${path.basename(file).split(".")[0]}.mdx`,
    ),
});
