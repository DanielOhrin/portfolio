import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import AboutMe from "../views/AboutMe.vue"
import { nextTick } from "vue"

/* For more info, visit https://router.vuejs.org/guide/ */

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "home",
    component: Home,
    props: {
      msg: "Vite + Vue"
    }
  },
  {
    path: "/about-me",
    name: "about-me",
    component: AboutMe,
    meta: {
      title: "About"
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//#region Title
const DEFAULT_TITLE = "Daniel Ohrin"
router.afterEach((to, _from) => {
  let subTitle = ""

  const { title } = to.meta
  if (typeof title === "string") subTitle = ` | ${title}`

  nextTick(() => (document.title = DEFAULT_TITLE + subTitle))
})
//#endregion Title

export default router
