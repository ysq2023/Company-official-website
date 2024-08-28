import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: { name: "homeCont" },
  },
  {
    path: "/home",
    name: "homeCont",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/index.vue"),
  },
  {
    path: "/serve",
    name: "serveView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/serveView.vue"),
  },
  {
    path: "/intro",
    name: "intro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IntroduceView.vue"),
  },
  {
    path: "/call",
    name: "call",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CallmeView.vue"),
  },
  {
    path: "/serve-area",
    name: "serve-area",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/serveArea.vue"),
  },
  {
    path: "/hot-details",
    name: "hot-details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/hotdetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
