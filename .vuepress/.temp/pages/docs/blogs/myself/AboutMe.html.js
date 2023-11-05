export const data = JSON.parse("{\"key\":\"v-9609cf9c\",\"path\":\"/docs/blogs/myself/AboutMe.html\",\"title\":\"关于我\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"关于我\",\"date\":\"2023/11/04\",\"tags\":[\"介绍\"],\"categories\":[\"随笔\"]},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"docs/blogs/myself/AboutMe.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
