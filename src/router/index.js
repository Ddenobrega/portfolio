import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/github",
    name: "Github",
    beforeEnter() {
      window.open("https://github.com/ddenobrega");
    },
  },
  {
    path: "/linkedin",
    name: "Linkedin",
    beforeEnter() {
      window.open("https://linkedin.com/in/dcdenobrega");
    },
  },
  {
    path: "/gmail",
    name: "Gmail",
    beforeEnter() {
      window.open("mailto:daryl111000@gmail.com?subject=enquiry");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
