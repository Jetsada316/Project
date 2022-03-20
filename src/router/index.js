import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import RegisterUser from "../views/RegisterUser.vue";
import Shop from "../views/Shop.vue";
import Detail from "../components/Detail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/RegisterUser",
    name: "register",
    component: RegisterUser,
  },
  {
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "/detail/:id",
        name: "detail",
        component: Detail,
      },
    ],
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
