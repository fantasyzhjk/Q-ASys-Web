<template>
  <div id="answerPage">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar style="height:100%">
          <Aside v-bind:totalNum="TotalNum" />
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar style="height:100%">
          <Item
            v-bind:topic="Topic"
            v-bind:type="Type"
            v-bind:answerA="AnswerA"
            v-bind:answerB="AnswerB"
            v-bind:answerC="AnswerC"
            v-bind:answerD="AnswerD"
            v-bind:totalNum="TotalNum"
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
  metaInfo: {
    title: "答题 | 在线答题系统",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }
    ]
  },
  computed: {
    isFollow() {
      return this.$store.state.currentNum;
    }
  },
  watch: {
    isFollow(newVal, oldVal) {
      console.log(newVal + " " + oldVal);
      console.log(this.$store.state.questions[newVal - 1].Topic);
      this.change(newVal - 1);
    }
  },

  mounted() {
    var str = [];
    for (let i = 0; i < this.TotalNum; i++) {
      str[i] = 0;
    }
    this.$store.state.opt = str;
    // this.load ();
    this.change(0);
  },
  components: {
    Item,
    Aside
  },
  data() {
    return {
      Topic: "这是题目",
      Type: 1,
      AnswerA: "答案A",
      AnswerB: "答案B",
      AnswerC: "答案C",
      AnswerD: "答案D",
      // Comp: true,
      TotalNum: 5
    };
  },
  methods: {
    //
    change(newVal) {
      this.Topic = this.$store.state.questions[newVal].Topic;
      this.Type = this.$store.state.questions[newVal].Type;
      if (this.type != 2) {
        this.AnswerA = this.$store.state.questions[newVal].AnswerA;
        this.AnswerB = this.$store.state.questions[newVal].AnswerB;
        this.AnswerC = this.$store.state.questions[newVal].AnswerC;
        this.AnswerD = this.$store.state.questions[newVal].AnswerD;
      }
    }
  }
};
</script>

<style lang="scss">
.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
  max-height: calc(100vh - 60px);
  border-right: solid 1px #e6e6e6;
  min-height: calc(100vh - 60px);
}

.el-main {
  background-color: #fafafa;
  color: #333;
  // text-align: left;
  // line-height: 50px;
  // padding: 0px;
  max-height: calc(100vh - 60px);
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
