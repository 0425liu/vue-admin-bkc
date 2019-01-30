import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
const routePath = {
  Acount: ["DeviceAcount", "SystemMaintenance"],
  Device: ["Dimension", "ImportAssess", "StatusAssess", "Standard"],
  System: [
    "Authority",
    "User",
    "Menu",
    "DictionaryManage",
    "DictionaryManage/Code"
  ]
};
Vue.use(Router);
let routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
];
for (let key in routePath) {
  const dirPath = routePath[key].map(name => ({
    path: `/${name}`,
    name: name,
    component: () => import(`./views/${key}/${name}`)
  }));
  routes.push(...dirPath);
}

export default new Router({
  routes
});
