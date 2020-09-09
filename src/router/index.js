import { createRouter, createWebHistory } from 'vue-router'
import signin from "../views/login.vue";
import layout from "../views/main.vue";
import dashboard from "../components/pageComponent/dashboard.vue";
import mail from "../components/pageComponent/mail.vue";
import users from "../components/pageComponent/users.vue";
import setup from "../components/pageComponent/setup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: signin
  },

  {
    path: "/layout",
    name: "layout",
    component: layout,
    children: [
      { path: "/dashboard", components: { routeA: dashboard } },
      { path: "/users", components: { routeA: users } },
      { path: "/setup", components: { routeA: setup } },
      { path: "/mail", components: { routeA: mail } }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
