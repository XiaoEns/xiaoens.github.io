export const data = JSON.parse("{\"key\":\"v-70f134ec\",\"path\":\"/books/Front/JS.html\",\"title\":\"JavaScript\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"JavaScript\",\"date\":\"2023/11/04\"},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"books/Front/JS.md\"}")

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
