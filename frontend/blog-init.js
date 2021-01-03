import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "@/routes.js";

import Home from "@/home";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router,
  components: { Home },
  template: "<Home/>",
}).$mount("#app");
