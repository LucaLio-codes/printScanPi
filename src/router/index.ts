import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ScannerView from "../views/ScannerView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "scanner",
    component: ScannerView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
