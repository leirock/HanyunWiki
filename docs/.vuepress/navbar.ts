import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/intro/",
  {
    text: "音乐作品",
    icon: "music",
    prefix: "/music/",
    children: [
      "album",
      "single",
      "concert",
      "gala",
      "live",
    ],
  },
  {
    text: "影视作品",
    icon: "movie",
    prefix: "/video/",
    children: [
      "drama",
      "movie",
      "variety",
      "interview",
      "host",
      "other",
    ],
  },
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
