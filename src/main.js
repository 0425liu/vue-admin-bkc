import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueHighcharts from "vue-highcharts";

import Highcharts from "highcharts";
import loadMap from "highcharts/modules/map";
loadMap(Highcharts);
Vue.use(VueHighcharts, { Highcharts });
Vue.use(ElementUI, { size: "small" });
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "scss/reset.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
