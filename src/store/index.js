import Vue from "vue";
import Vuex from "vuex";
import Meta from 'vue-meta';

Vue.use(Vuex);
Vue.use(Meta);

const state = {
  user: "",
  token: "",
  currentPage: "/",
  currentNum: 1,
}

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {}
});
