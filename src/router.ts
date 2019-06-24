import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import pessoa from "@/views/pessoa/pessoa.router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...routes,
    ...pessoa,
    {
      path: '*',
      redirect: '/consulta',
    }
  ]
});
