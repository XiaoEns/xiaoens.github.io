export const data = JSON.parse("{\"key\":\"v-5f4fc958\",\"path\":\"/books/theme-reco/plugin.html\",\"title\":\"plugin\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"plugin\",\"date\":\"2020/05/28\"},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"books/theme-reco/plugin.md\"}")

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
