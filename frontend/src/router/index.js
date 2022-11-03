import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/home/Home.vue";
import Report from "../views/report/Report.vue";
import Login from "../views/login/Login.vue";
import Setting from "../views/setting/Setting.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
