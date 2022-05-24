import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://hanyun.pinlyu.com",

  author: "含韵百科",

  iconAssets: "https://at.alicdn.com/t/font_2629682_w7f7d1vp64.css",

  logo: "/images/logo.png",

  repo: "https://github.com/leirock/HanyunWiki",
  
  repoDisplay: false,

  docsDir: "docs",

  navbar: navbar,

  sidebar: sidebar,
  
  footer: "版权所有 © 含韵百科 | CC BY-SA 4.0",

  displayFooter: true,

  pageInfo: false,

  lastUpdated: false,

  contributors: false,

  breadcrumbIcon: false,

  pure: true,

  toc: false,

  copyright: false,

  themeColor: false,

  darkmode: "disable",

  fullscreen: false,

  plugins: {

    copyCode: false,

    mdEnhance: {
      align:true,
      footnote:true,
      mark: true,
      lazyLoad: true,
    },

    pwa: {
      favicon: "/assets/icon/favicon.ico",
      themeColor: "#5c92d1",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152x152.png",
      },
      manifest: {
        name: 'Waline',
        short_name: 'Waline',
        description: 'A simple comment system with backend support',
        icons: [
          {
            src: '/assets/icon/android-icon-192x192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
        ],
      },
    },

  },
});
