import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";
import layoutStroe from "./layoutStroe";
Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    layout: {
      namespaced: true,
      ...layoutStroe
    }
  },
  plugins: debug ? [createLogger()] : []
});
