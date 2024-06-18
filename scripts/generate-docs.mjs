import * as OpenAPI from "fumadocs-openapi";

void OpenAPI.generateFiles({
  input: ["*.json"],
  output: "../content/docs/",
  per: "tag",
})
  .catch(console.error)
  .then((e) => console.log(e));
