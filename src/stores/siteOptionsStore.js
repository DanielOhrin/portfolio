const { defineStore } = require("pinia")

const useSiteOptionsStore = defineStore("site-options", {
  state: () => ({ darkMode: false }),
  getters: {},
  actions: {
    useDarkMode() {
      this.darkMode = true
    },
    useLightMode() {
      this.darkMode = false
    }
  }
})
