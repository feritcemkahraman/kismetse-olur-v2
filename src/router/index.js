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
      {
        path: "/aydinlatma-metni",
        name: "aydinlatma-metni",
        component: () => import("../views/AydinlatmaMetni.vue"),
        meta: {
          tab_title: "Kişisel Verilerin İşlenmesine İlişkin Yarışmacı Adayı Aydınlatma Metni",
        },
      },
      {
        path: "/cerez-politikasi",
        name: "cerez-politikasi",
        component: () => import("../views/CerezPolitikasi.vue"),
        meta: {
          tab_title: "Çerez Politikası",
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
