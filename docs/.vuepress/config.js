const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
  title: "含韵百科",
  description: "全方位认识张含韵的百科站点",

  dest: "./dist",

  head: [
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"}],
    //访问统计
    ["script", { async: "",  defer: "", 'data-website-id': "c0717375-4e12-40b0-943e-58cff1dbfe05", src: "https://stats.dlzhang.com/umami.js"}],
    //百度搜索资源平台站点验证
    ["meta", { name: "baidu-site-verification", content: "code-exBGMGg3gF"}],
    //Fancybox
    ['script', { src: 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css' }],    
  ],

  locales: {
    "/": { lang: "zh-CN" },
  },

  themeConfig: {

//****************
//基本设置
//****************
    //默认作者
    author: "含韵百科",
    
    //导航栏设置
    nav: navBarConfig,

    //侧边栏设置
    sidebar: sideBarConfig,

    //当前网站部署到的域名
    hostname: "https://www.hanyunzhang.com",

    //导航栏的 logo 图片，需填入绝对路径并放入`.vuepress/public`文件夹。
    //黑暗模式 logo 需配置 darkLogo
    logo: "https://cdn.jsdelivr.net/gh/leirock/HanyunWiki/docs/.vuepress/public/images/logo.png",

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

    //黑暗模式，类型：
    //auto-switch："关闭 | 自动 | 打开" 的三段式开关，默认
    //switch："关闭 | 打开" 的切换式开关
    //auto：自动根据用户设备主题或当前时间决定是否应用深色模式
    //disable：禁用深色模式
    darkmode: "disable",

    //主题色选项配置
    themeColor: false,

    //博客功能
    blog: false,

    //移动视图下隐藏站点名称
    hideSiteTitleonMobile: false,

    //是否显示 ”全屏“ 按钮
    fullscreen: false,

    //文章基本信息
    pageInfo: false,

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
    },

    pwa: {
      favicon: "/assets/icon/favicon.ico",
      themeColor: "#fff",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152x152.png",
        statusBarColor: "#fff",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144x144.png",
        color: "#fff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/android-icon-144x144.png",
            size: "144x144",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-96x96.png",
            size: "96x96",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-72x72.png",
            size: "72x72",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-48x48.png",
            size: "48x48",
            type: "image/png",
           },
          {
            src: "/assets/icon/android-icon-36x36.png",
            size: "36x36",
            type: "image/png",
           },
        ],
      },
    },
  },
});
