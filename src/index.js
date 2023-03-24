const path = require("node:path");
const plugin = require("tailwindcss/plugin");
const { globSync } = require("glob");

module.exports = plugin(({ addComponents, theme }) => {
  // install components
  //TODO performance issues?
  const components = globSync(path.resolve(__dirname, "./components/*.js")).map(
    (componentPath) => require(componentPath)({ theme })
  );

  addComponents(components);
});
