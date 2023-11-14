export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/logo.png\",\"author\":\"老羊肖恩\",\"authorAvatar\":\"/logo.png\",\"docsRepo\":\"https://github.com/XiaoEns/xiaoens.github.io\",\"docsBranch\":\"gh-pages\",\"docsDir\":\"docs\",\"lastUpdatedText\":\"\",\"series\":{\"/books/Java/\":[{\"text\":\"Java基础\",\"children\":[\"Java\",\"JAVA8\"]},{\"text\":\"Java进阶\",\"children\":[\"JVM\",\"JUC\"]},{\"text\":\"Web框架\",\"children\":[\"Spring\",\"SpringMVC\",\"SpringBoot\"]}],\"/books/Java/DesignPatterns\":[{\"text\":\"设计模式\",\"children\":[\"DesignPatterns\"]}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Java\",\"children\":[{\"text\":\"Java\",\"link\":\"/books/Java/Java\"},{\"text\":\"Java框架\",\"link\":\"/books/Java/Spring\"},{\"text\":\"微服务\",\"link\":\"/books/Java/Java\"},{\"text\":\"设计模式\",\"link\":\"/books/Java/DesignPatterns\"}]},{\"text\":\"数据库\",\"children\":[{\"text\":\"MySQL\",\"link\":\"/books/DataBase/MySQL\"},{\"text\":\"Redis\",\"link\":\"/books/DataBase/Redis\"}]},{\"text\":\"前端\",\"children\":[{\"text\":\"JS\",\"link\":\"/books/Front/JS\"},{\"text\":\"TS\",\"link\":\"/books/Front/TS\"}]},{\"text\":\"博客\",\"children\":[{\"text\":\"关于我\",\"link\":\"/blogs/myself/AboutMe\"}]},{\"text\":\"时间轴\",\"link\":\"/时间轴/\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
