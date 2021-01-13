import {RouteName} from "@/router/routes";
import Home from "@/views/Home.vue";
import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: RouteName.Root,
    component: Home,
  },
  {
    path: "/child",
    name: RouteName.Child,
    component: () =>
      import("child/App").then((m) => {
        return m.Module;
      }),
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
