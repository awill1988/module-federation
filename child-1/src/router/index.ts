import {RouteName} from "@/router/routes";
import Home from "@/views/Home.vue";
import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/child",
    name: RouteName.Root,
    component: Home,
  },
  {
    path: "/home",
    name: RouteName.Home,
    component: () => import("home/App").then((m) => m.Module),
  },
];

let router: VueRouter;

export function setupRouter(): VueRouter {
  router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  return router;
}

router = setupRouter();

export default router;
