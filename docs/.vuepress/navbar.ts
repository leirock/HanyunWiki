import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/intro/",
  "/music/",
  "/video/",
  {
    text: "出版物",
    icon: "book-open",
    prefix: "/publication/",
    children: [
      "book",
      "magazine",
    ],
  },
  {
    text: "圆桌会",
    icon: "question-answer",
    prefix: "/roundtable/",
    children: [
      "collection",
      "report",
      "anecdote",
    ],
  },
  "/about/",
]);
