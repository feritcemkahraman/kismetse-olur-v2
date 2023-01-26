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
        meta: {
          tab_title: "Kısmetse Olur: Aşkın Gücü",
        },
      },
      {
        path: "/basvurular",
        name: "basvurular",
        component: () => import("../views/Basvurular.vue"),
        meta: {
          tab_title: "Başvurular",
        },
      },
      {
        path: "/duyurular",
        name: "duyurular",
        component: () => import("../views/Duyurular.vue"),
        meta: {
          tab_title: "Duyurular",
        },
      },
      {
        path: "/iletisim",
        name: "iletisim",
        component: () => import("../views/İletisim.vue"),
      },
      {
        path: "/kullanim-gizlilik",
        name: "kullanim-gizlilik",
        component: () => import("../views/KullanimSartlari.vue"),
        meta: {
          tab_title: "Kullanım Şartları ve Gizlilik Politikası",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.tab_title) {
    document.title = to.meta.tab_title;
  } else {
    document.title = "Kısmetse Olur: Aşkın Gücü";
  }
  next();
});

export default router;
