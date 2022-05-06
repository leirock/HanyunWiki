import { defineUserConfig } from "vuepress";
import theme from './theme';

export default defineUserConfig({
  lang: "zh-CN",
  title: "含韵百科",
  description: "全方位认识张含韵的百科站点",

  base: "/",

  head: [
    ["link", { rel: "stylesheet", href: "https://at.alicdn.com/t/font_2629682_w7f7d1vp64.css" },],
    ["script", { async: "",  defer: "", 'data-website-id': "130b8b20-37c0-4c7e-a17f-77af96beb621", src: "https://stat.pinlyu.com/script.js" }],
    //Fancybox
    ['script', { src: 'https://lib.baomitu.com/jquery/latest/jquery.min.js' }],
    ['script', { src: 'https://lib.baomitu.com/fancybox/latest/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://lib.baomitu.com/fancybox/latest/jquery.fancybox.min.css' }],    
  ],

  theme,

});
