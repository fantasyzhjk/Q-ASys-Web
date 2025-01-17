import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import answerPage from "@/views/answerPage.vue";
import Login from "@/views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/answerpage",
    name: "answerPage",
    component: answerPage
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
