import Vue from "vue";
import Router from "vue-router";

import pessoa from "@/views/pessoa/pessoa.router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...pessoa,
    {
      path: '*',
      redirect: '/consulta',
    }
  ]
});
