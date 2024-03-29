import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/intro/",
  {
    text: "音乐作品",
    icon: "music",
    prefix: "/music/",
    children: [
      "album/",
      "single",
      "gala",
      "concert",
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
      "interview",
      "live",
      "anecdote",
    ],
  },
  "/about/",
]);
