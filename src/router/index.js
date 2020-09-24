import Vue from "vue";
import VueRouter from "vue-router";
import SendLocation from "../views/SendLocation.vue";
import Database from "../views/Database.vue";
import Home from "../views/Home.vue";
/* eslint-disable */
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/send-location",
    name: "send-location",
    component: SendLocation,
  },
  {
    path: "/database",
    name: "database",
    component: Database,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
