<template>
  <div id="answerPage">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar style="height:100%">
          <Aside v-bind:num="ANum" />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar style="height:100%">
          <Item
            v-bind:topic="Topic"
            v-bind:num="Num"
            v-bind:type="Type"
            v-bind:answerA="AnswerA"
            v-bind:answerB="AnswerB"
            v-bind:answerC="AnswerC"
            v-bind:answerD="AnswerD"
            v-bind:comp="Comp"
          />
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Aside from "@/components/ItemAside.vue";

export default {
  components: {
    Item,
    Aside
  },
  data() {
    return {
      Topic: "",
      Num: 250,
      Type: 2,
      AnswerA: "答案A",
      AnswerB: "答案B",
      AnswerC: "答案C",
      AnswerD: "答案D",
      Comp: true,
      ANum: 100
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  max-height: calc(100vh - 60px);
  border-right: solid 1px #e6e6e6;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 50px;
  padding: 0px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

#answerPage {
  min-height: 100%;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
