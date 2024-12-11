import { createRouter, createWebHistory } from "vue-router";

import SurveyPageView from "../views/SurveyPageView.vue";
import SurveyListView from "../views/SurveyListView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    { path: "/survey", name: "survey", component: SurveyPageView },
    { path: "/surveyLists", name: "surveyLists", component: SurveyListView },
    {
      path: "/survey/:id",

      component: SurveyPageView,
      props: true,
    },
  ],
});

export default router;
