import NavTab from "./NavTab.vue"

const components = [NavTab]

import { App } from "vue"

export default {
  install: (app: App) => {
    components.forEach((c) => app.component(c.name!, c))
  }
}
