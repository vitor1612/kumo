const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/vitor1612/vitor1612.github.io.git"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
