const { navbarConfig } = require("vuepress-theme-hope");

module.exports = navbarConfig([
  { text: "认识含韵", link: "/intro/", icon: "account-circle" },
  { text: "音乐作品", link: "/music/", icon: "music" },
  { text: "影视作品", link: "/video/", icon: "movie" },
  { text: "出版物", link: "/publication/", icon: "book-open" },
  { text: "圆桌会", link: "/roundtable/", icon: "question-answer" },
  { text: "关于", link: "/about/", icon: "dashboard" },
]);