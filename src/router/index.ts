import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeScreen from "../components/HomeScreen.vue"
import CardList from "../components/CardList.vue"
import ViewSidebar from "../components/ViewSidebar.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: HomeScreen,
    children: [
      {
        path: "",
        name: "CardList",
        component: CardList
      }
    ]
  },
  {
    path: "/vista01",
    name: "Vista01",
    component: HomeScreen,
    children: [
      {
        path: "",
        name: "ViewSidebar01",
        component: ViewSidebar,
        props: { id: "01" }
      }
    ]
  },
  {
    path: "/vista02",
    name: "ViewSidebar02",
    component: HomeScreen,
    children: [
      {
        path: "",
        name: "ViewSidebar02",
        component: ViewSidebar,
        props: { id: "02" }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
