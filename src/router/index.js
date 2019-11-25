import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
// import branch2 from "@/components/branch2";
import list from "../list";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    { path: "/list", name: "list", component: list }
  ]
});
