import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/home/:id",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    props: true 
  },
  
  {
    path: "/about/:id",
    name: "About",
    component: About,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;