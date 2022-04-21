import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/intro/",
  "/music/",
  "/video/",
  "/publication/",
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
