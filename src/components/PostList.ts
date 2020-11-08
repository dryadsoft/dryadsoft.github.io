export const navList = [
  {
    to: "/posts/gulp",
    text: "gulp.js"
  },
  {
    to: "/posts/git",
    text: "git"
  },
  {
    to: "/posts/reactnative",
    text: "reactnative"
  },
  {
    to: "/posts/nodejs",
    text: "node.js"
  }
];

export const PostList = [
  {
    category: "gulp",
    seq: 1,
    content: () => require("../posts/gulp/20191020001.md")
  },
  {
    category: "git",
    seq: 2,
    content: () => require("../posts/git/20200105001.md")
  },
  {
    category: "git",
    seq: 3,
    content: () => require("../posts/git/20200105002.md")
  },
  {
    category: "reactnative",
    seq: 4,
    content: () => require("../posts/reactnative/20200105003.md")
  },
  {
    category: "reactnative",
    seq: 5,
    content: () => require("../posts/reactnative/20200107001.md")
  },
  {
    category: "git",
    seq: 6,
    content: () => require("../posts/git/20200113001.md")
  },
  {
    category: "reactnative",
    seq: 7,
    content: () => require("../posts/reactnative/20200117001.md")
  },
  {
    category: "git",
    seq: 8,
    content: () => require("../posts/git/20200118001.md")
  },
  {
    category: "gulp",
    seq: 9,
    content: () => require("../posts/gulp/20200205001.md")
  },
  {
    category: "gulp",
    seq: 10,
    content: () => require("../posts/gulp/20200206001.md")
  },
  {
    category: "gulp",
    seq: 11,
    content: () => require("../posts/gulp/20200208001.md")
  },
  {
    category: "nodejs",
    seq: 12,
    content: () => require("../posts/nodejs/20200326001.md")
  }
];
