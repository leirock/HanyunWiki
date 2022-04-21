import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "/intro/": [
    "", //认识含韵
    {
      text: "时间轴",
      icon: "footprint",
      prefix: "timeline/",
      collapsable: false,
      children: [
        "89-03-early", //1989-2003年：早年经历
        "04-debut", //2004年：超女出道
        "05-07-vogue", //2005-2007年：迅速走红
        "08-10-trough", //2008-2010年：陷入低谷
        "11-19-transformation", //2011-2019年：转型演员
        "20-back", //2020年至今：重回视野
      ],
    },
    {
      text: "奖项荣誉",
      icon: "trophy",
      prefix: "award/",
      collapsable: false,
      children: [
        "music",
        "other",
      ],
    },
    {
      text: "形象代言",
      icon: "lightbulb-flash",
      prefix: "branding/",
      collapsable: false,
      children: [
        "psa", //公益代言 (public service advertising)
        "business", //商业代言
      ],
    },
  ],

  //音乐作品
  "/music/": [
    "album",
    "single",
    "concert",
    "gala",
    "live",
  ],

  //影视作品
  "/video/": [
    "drama",
    "movie",
    "variety",
    "interview",
    "host",
    "other",
  ],

  //出版物
  "/publication/": [
  ],

  //圆桌会
  "/roundtable/": [
    "collection/", //随笔文集
    "report", //媒体报道
    "anecdote", //逸闻趣事
  ],

  //关于
  "/about/": [
    "", //关于
    "disclaimer", //免责声明
    "copyright", //著作权信息
  ],
});
