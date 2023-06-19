import { createRouter, createWebHistory } from "vue-router";
// import store from "@/store";
const routes = [
   // {
   //    path: "/",
   //    name: "login",
   //    component: () => import("@/views/auth/Login.vue"),
   //    meta: {
   //       title: "Login",
   //       requiresAuth: false,
   //    },
   // },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
   linkActiveClass: "router-link-active",
});

// const DEFAULT_TITLE = "POS";

export default router;
