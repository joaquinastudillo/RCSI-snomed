import Vue from "vue";
import Router from "vue-router";
import Layout from "./components/layout/Layout";
import DiagnosticsBox from "./components/content/content_elements/DiagnosticsBox.vue";
import CreateTerm from "./components/content/crud/CreateTerm.vue";
import EditTerm from "./components/content/crud/EditTerm.vue";

Vue.use(Router);

export default new Router({
  //mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
          path: "search/term=:text",
          component: DiagnosticsBox,
          name: "search"
        },
        {
          path: "create",
          component: CreateTerm,
          name: "create"
        },
        {
          path: "edit",
          component: EditTerm,
          name: "edit"
        }
      ]
    }
  ]
});
