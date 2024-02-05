import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/LandPage.vue"),
  },
  {
    path: "*",
    component: () => import("../views/ErrorPages/ErrorPage404.vue"),
  },
  {
    path: "/inicio",
    component: () => import("../components/Inicio.vue"),
    children: [
      {
        path: "/formulario",
        name: "formulario",
        component: () => import("../components/Formulario.vue"),
      },
      {
        path: "/page",
        name: "page",
        component: () => import("../components/Pagination.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history", // Habilita el modo Historial
  fallback: "true", //Sirve para hacer un modo hibrido
  routes,
});

export default router;
