import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./style.css"
import components from "./components"

// Create App
const app = createApp(App)

// Install Components
app.use(components)

// Install Plugins
app.use(router)

// Mount
app.mount("#app")
