import Vue from "vue";
import Vuex from "vuex";
import Meta from "vue-meta";

Vue.use(Vuex);
Vue.use(Meta);

const state = {
  token: "",
  currentNum: 1,
  // radio
  opt: [],
  questions: [
    {
      Topic: "加载中",
      Type: 1,
      AnswerA: "加载中",
      AnswerB: "加载中",
      AnswerC: "加载中",
      AnswerD: "加载中",
    },
  ],
};

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
});
