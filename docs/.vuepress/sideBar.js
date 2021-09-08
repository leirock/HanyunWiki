const { sidebarConfig } = require("vuepress-theme-hope");

module.exports = sidebarConfig({
  //走近小花
  "/intro/": [
    "", //认识含韵
    {
      title: "时间轴",
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
      title: "奖项荣誉",
      icon: "trophy",
      prefix: "award/",
      collapsable: false,
      children: [
        "music", //音乐奖项
        "other", //其他荣誉
      ],
    },
    {
      title: "形象代言",
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
  "/works/music/": [
    "album/", //专辑
    "single", //录音室单曲
    "concert", //专场歌友会
    {
      title: "舞台表演",
      icon: "apps",
      prefix: "stage/",
      collapsable: false,
      children: [
        "gala", //大型晚会典礼
        "cctv", //央视户外歌会节目
      ],
    },
    "live",
  ],

  //影视作品
  "/works/video/": [
    "drama", //电视剧
    "movie", //电影
    {
      title: "综艺节目",
      icon: "magic",
      prefix: "variety/",
      collapsable: false,
      children: [
        "fixed", //固定综艺节目
        "nonfixed", //非固定综艺节目
      ],
    },
    "interview", //访谈节目
    "host", //节目主持
    "shorts", //短片作品
  ],

  //出版物
  "/works/publication/": [
    "book", //书籍
    "magazine", //报刊杂志
  ],

  //圆桌会
  "/roundtable/": [
    "collection/", //随笔文集
    "report", //媒体报道
    "anecdote", //逸闻趣事
  ],

  //关于
  "/about/": [
    "", //关于本站
    "disclaimer", //免责声明
    "copyright", //著作权信息
  ],
});