import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/MainLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "homeview",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/basvurular",
        name: "basvurular",
        component: () => import("../views/Basvurular.vue"),
      },
      {
        path: "/duyurular",
        name: "duyurular",
        component: () => import("../views/Duyurular.vue"),
      },
      {
        path: "/iletisim",
        name: "iletisim",
        component: () => import("../views/İletisim.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
