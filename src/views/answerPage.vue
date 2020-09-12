<template>
  <div id="answerPage">
    <el-container>
      <el-drawer
        title="我是标题"
        direction="ltr"
        :with-header="false"
        :visible.sync="drawer"
        size="100"
      >
        <!-- <el-aside width="150px" class="hidden-sm-and-down"> -->
        <el-scrollbar style="height:100%">
          <Aside width="150px" v-bind:totalNum="TotalNum" />
        </el-scrollbar>
        <!-- </el-aside> -->
      </el-drawer>
      <el-main>
        <Item
          v-bind:topic="Topic"
          v-bind:type="Type"
          v-bind:answerA="AnswerA"
          v-bind:answerB="AnswerB"
          v-bind:answerC="AnswerC"
          v-bind:answerD="AnswerD"
          v-bind:answer="Answer"
          v-bind:totalNum="TotalNum"
        />
      </el-main>
    </el-container>
    <el-button id="drawerButton" @click="drawer = true" icon="el-icon-check">查看题目</el-button>
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
    isFollow(newVal) {
      this.change(newVal - 1);
    }
  },
  mounted() {
    var str = [];
    for (let i = 0; i < this.TotalNum; i++) {
      str[i] = 0;
    }
    if (this.$store.state.token == "") {
      this.$message({
        showClose: true,
        message: "请登入",
        type: "error"
      });
      this.$router.push("/login");
    } else if (this.$store.state.questions[0].ti == "加载中") {
      this.getTopic(this.TotalNum);
    }
    this.change(this.$store.state.currentNum - 1);
    this.$store.state.opt = str;
  },
  components: {
    Item,
    Aside
  },
  data() {
    return {
      drawer: false,
      Topic: "加载中",
      Type: 1,
      AnswerA: "加载中",
      AnswerB: "加载中",
      AnswerC: "加载中",
      AnswerD: "加载中",
      Answer: 0,
      // Comp: true,
      TotalNum: 5
    };
  },
  methods: {
    getTopic(nodle) {
      const loading = this.$loading({
        lock: true,
        text: "加载中.."
      });
      setTimeout(() => {
        loading.close();
        if (this.$store.state.token == "") {
          this.$message({
            showClose: true,
            message: "连接失败，请检查您的网络链接",
            type: "error"
          });
        }
      }, 10000);
      this.axios
        .get(
          "http://aliyun.fantasyzhjk.top:3000/api/v1/get/timu/sj?nodle=" + nodle
        )
        .then(resp => {
          console.log(resp);
          if (resp.data.status === 200) {
            this.$store.state.questions = resp.data.data;
            this.change(this.$store.state.currentNum - 1);
            loading.close();
          } else {
            loading.close();
            this.$message({
              showClose: true,
              message: "发生未知错误，请联系网站管理员维修",
              type: "error"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    change(newVal) {
      this.Topic = this.$store.state.questions[newVal].ti;
      this.Type = this.$store.state.questions[newVal].type;
      // this.Answer = this.$store.state.questions[newVal].daan;
      if (this.$store.state.questions[newVal].daan == "A") {
        this.Answer = 1;
      }
      if (this.$store.state.questions[newVal].daan == "B") {
        this.Answer = 2;
      }
      if (this.$store.state.questions[newVal].daan == "C") {
        this.Answer = 3;
      }
      if (this.$store.state.questions[newVal].daan == "D") {
        this.Answer = 4;
      }
      if (this.type != 1) {
        this.AnswerA = this.$store.state.questions[newVal].a;
        this.AnswerB = this.$store.state.questions[newVal].b;
        this.AnswerC = this.$store.state.questions[newVal].c;
        this.AnswerD = this.$store.state.questions[newVal].d;
      }
    }
  }
};
</script>

<style lang="scss">
.el-aside {
  color: #333;
  text-align: center;
  max-height: calc(100vh - 60px);
  border-right: solid 1px #e6e6e6;
  min-height: calc(100vh - 60px);
}
.el-scrollbar > div:nth-child(1) {
  overflow-x: hidden;
}
.el-main {
  background-color: #fafafa;
  color: #333;
  // text-align: left;
  // line-height: 50px;
  // padding: 10px;
  max-height: calc(100vh - 60px);
}

body > .el-container {
  margin-bottom: 40px;
}

#drawerButton {
  left: 40px;
  bottom: 60px;
  position: fixed;
}

.el-drawer {
  width: 100px;
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
</style>
