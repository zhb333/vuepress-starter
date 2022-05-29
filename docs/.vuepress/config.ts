import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import { defaultTheme } from "@vuepress/theme-default";
const { googleAnalyticsPlugin } = require("@vuepress/plugin-google-analytics");

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",
  // pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!MyBlog/*.md'],
  // public: path.resolve(__dirname, './static'),
  alias: {
    "@images": path.resolve(__dirname, "../images"),
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "VuePress",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  base: "/vuepress-starter/",
  markdown: {
    anchor: false,
    // links: false,
    emoji: false,
    code: {
      // lineNumbers: false,
      // highlightLines: false
    },
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, "./")),
    },
  },
  theme: defaultTheme({
    locales: {
      "/": {
        selectLanguageName: "English",
        selectLanguageText: "Languages",
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
      },
    },
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
    ],
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: "G-JELP583QGL",
    }),
  ],
});
