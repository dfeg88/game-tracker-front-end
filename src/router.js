import Vue from "vue";
import Router from 'vue-router'
import Games from "@/components/Games";
import AddGame from "@/components/AddGame";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'games',
      component: Games
    },
    {
      path: "/create",
      name: "create",
      component: AddGame
    }

  ]
})