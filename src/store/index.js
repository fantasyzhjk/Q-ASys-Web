import Vue from "vue";
import Vuex from "vuex";
import Meta from 'vue-meta';

Vue.use(Vuex);
Vue.use(Meta);

const state = {
  user: "",
  token: "",
  currentNum: 1,
  // radio
  opt: [],
  questions: [
    {
      Topic: "这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题这是第一题 是选择题",
      Type: 1,
      AnswerA: "是A哒",
      AnswerB: "是B哦",
      AnswerC: "是C呢",
      AnswerD: "是D吗",
    },
    {
      Topic: "这是第二题 是选择题",
      Type: 1,
      AnswerA: "是A哒2",
      AnswerB: "是B哦33",
      AnswerC: "是C呢2",
      AnswerD: "是D吗33",
    },
    {
      Topic: "这是第三题 是选择题",
      Type: 1,
      AnswerA: "是A哒334",
      AnswerB: "是B哦33",
      AnswerC: "是C呢33",
      AnswerD: "是D吗33",
    },
    {
      Topic: "这是第四题 是判断题",
      Type: 2
    },
    {
      Topic: "这是第五题 是判断题",
      Type: 2
    },
  ],
}

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {}
});
