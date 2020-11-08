var ghpages = require("gh-pages");
ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "git@github.com:dryadsoft/dryadsoft.github.io.git"
  },
  error => {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  }
);
