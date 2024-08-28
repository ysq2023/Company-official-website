import { createApp } from "vue";
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import naive from 'naive-ui'
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(naive).use(store).use(router).mount("#app");
