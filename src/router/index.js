import Vue from "vue";
import Router from "vue-router";
import branch2 from "@/components/branch2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/branch2",
      name: "branch2",
      component: branch2
    }
  ]
});
