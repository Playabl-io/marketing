import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./tailwind.css";
import "./font.css";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ThanksPage from "./pages/ThanksPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/thanks", component: ThanksPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
