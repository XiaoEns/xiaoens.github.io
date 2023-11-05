import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "老羊肖恩",
  description: "老羊肖恩的个人博客",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }],],
  base: "/xiaoens.github.io/",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "老羊肖恩",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/XiaoEns/xiaoens.github.io",
    docsBranch: "gh-pages",
    docsDir: "docs",

    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/Java/": [
        {
          text: "Java基础",
          children: ["Java", "JAVA8"]
        },
        {
          text: "Java进阶",
          children: ["JVM", "JUC"]
        },
        {
          text: "Web框架",
          children: ["Spring", "SpringMVC", "SpringBoot"]
        }
      ],
      // "/docs/theme-reco/": [
      //   {
      //     text: "module one",
      //     children: ["home", "theme"],
      //   },
      //   {
      //     text: "module two",
      //     children: ["api", "plugin"],
      //   },
      // ],
    },
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Java",
        children: [
          { text: "Java", link: "/docs/Java/Java" },
          { text: "Java框架", link: "/docs/Java/Spring" },
          { text: "微服务", link: "/docs/Java/Java" },
          { text: "设计模式", link: "/docs/Java/Java" }
        ] 
      },
      {
        text: "数据库",
        children: [
          { text: "MySQL", link: "/docs/DataBase/MySQL" },
          { text: "Redis", link: "/docs/DataBase/Redis" },
        ]
      },
      {
        text: "前端", children: [
          { text: "JS", link: "/docs/Front/JS" },
          { text: "TS", link: "/docs/Front/TS" },
        ]
      },
      {
        text: "博客", children: [
          { text: "关于我", link: "/blogs/myself/AboutMe" },
          // { text: "分类", link: "/categories/reco/1/" },
          // { text: "标签", link: "/tags/tag1/1" },
        ]
      },
      { text: "时间轴", link: "/时间轴/" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
      //   ],
      // },
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
