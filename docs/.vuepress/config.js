const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
  title: "含韵百科",
  description: "全方位认识张含韵的百科站点",

  dest: "./dist",

  head: [
    //访问统计
    ["script", { async: "",  defer: "", 'data-website-id': "c0717375-4e12-40b0-943e-58cff1dbfe05", src: "https://stats.dlzhang.com/umami.js"}],
    //百度搜索资源平台站点验证
    ["meta", { name: "baidu-site-verification", content: "code-exBGMGg3gF"}],
    //Fancybox
    ['script', { src: 'https://lib.baomitu.com/jquery/3.6.0/jquery.min.js' }],
    ['script', { src: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.css' }],    
  ],

  locales: {
    "/": { lang: "zh-CN" },
  },

  themeConfig: {

//****************
//基本设置
//****************
    nav: navBarConfig,
    sidebar: sideBarConfig,

    //默认作者
    author: "含韵百科",

    //当前网站部署到的域名
    hostname: "https://www.hanyunzhang.com",

    //导航栏的 logo 图片，需填入绝对路径并放入`.vuepress/public`文件夹。
    //黑暗模式 logo 需配置 darkLogo
    logo: "/images/logo.png",

    //项目仓库地址
    repo: "https://github.com/leirock/HanyunWiki",

    //仓库分支
    docsBranch: "main",

    //文档位置
    docsDir: "docs",

    //页面显示编辑链接
    editLinks: true,

    //导航栏显示仓库链接
    repoDisplay: false,

    //页脚文字
    footer: {
      display: true,
      content: "",
      copyright: "Copyright © 含韵百科 | CC BY-SA 4.0",
    },

    themeColor: false,
    darkmode: "disable",
    blog: false,
    hideSiteTitleonMobile: false,
    fullscreen: false,
    pageInfo: false,
    search: false,

    git: {
      timezone: "Asia/Shanghai",
    },


//****************
//插件设置
//****************
    //Markdown增强插件
    mdEnhance: {
      imageFix: true,  //修复包含特殊字符的图片的引用
      align:true,  //自定义对齐
      footnote:true,  //脚注
      mark: true,  //标记
      lazyLoad: true,
    },

    pwa: {
      favicon: "/assets/icon/favicon.ico",
      themeColor: "#5c92d1",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152x152.png",
        statusBarColor: "#5c92d1",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144x144.png",
        color: "#5c92d1",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});
