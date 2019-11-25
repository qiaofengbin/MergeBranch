import Vue from "vue";
import Router from "vue-router";
// import branch2 from "@/components/branch2";
import list from "../list";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/list",
      name: "list",
      component: list
    }
  ]
});
