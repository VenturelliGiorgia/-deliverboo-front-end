import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "./pages/Welcome.vue";
import RestaurantsIndexPage from "./pages/restaurants/Index.vue";
import RestautantShowPage from "./pages/restaurants/Show.vue";
import NotFoundPage from "./pages/NotFound.vue";

const router = createRouter({
  // Serve ad indicare come gestire l'url al cambio pagina
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: WelcomePage,
    },
    {
      path: "/i-nostri-ristoranti",
      name: "restaurants",
      component: RestaurantsIndexPage,
    },
    {
      path: "/ristorante/:name",
      name: "ristorante",
      component: RestautantShowPage,
    },
    {
      path: "/piatto/:id",
      name: "dish",
      component: RestautantShowPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundPage,
    },
  ],
});

export { router };
