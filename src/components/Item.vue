<template>
  <div id="item">
    <el-container style="width:100%;height:100%">
      <el-header>
        <p style="float: right;">第 {{ this.$store.state.currentNum }}/{{ totalNum }} 题</p>
        <p style="float: left;">请选出正确答案</p>
      </el-header>
      <el-main>
        <el-scrollbar style="height:100%">
          <table style="width:100%;">
            <tr>
              <p>{{topic}}</p>
            </tr>
            <div style="height: 50px;" class="column-list">
              <div v-if="type == 0">
                <p>A. {{ answerA }}</p>
                <p>B. {{ answerB }}</p>
                <p>C. {{ answerC }}</p>
                <p>D. {{ answerD }}</p>
              </div>
            </div>
          </table>
        </el-scrollbar>
      </el-main>
      <el-footer>
        <el-progress
          style="width: 40%;float: left;padding: 10px;"
          :percentage="((this.$store.state.currentNum)*100)/this.totalNum"
        ></el-progress>
        <div style="float: right;display:flex;">
          <el-radio-group v-model="radio">
            <div v-if="type == 0">
              <el-radio-button :label="1" border>A</el-radio-button>
              <el-radio-button :label="2" border>B</el-radio-button>
              <el-radio-button :label="3" border>C</el-radio-button>
              <el-radio-button :label="4" border>D</el-radio-button>
            </div>
            <div v-if="type == 1">
              <el-radio-button :label="1" border>是</el-radio-button>
              <el-radio-button :label="2" border>否</el-radio-button>
            </div>
          </el-radio-group>
          <div v-if="this.$store.state.currentNum == this.totalNum">
            <el-button @click="getradio" :disabled="unComp" :loading="false" icon="el-icon-check">提交</el-button>
          </div>
          <div v-if="this.$store.state.currentNum < this.totalNum">
            <el-button @click="nextradio" :disabled="unComp">下一题</el-button>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    topic: String,
    type: Number,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String,
    // comp: Boolean,
    totalNum: Number
  },
  data() {
    return {
      radio: 0,
      unComp: true
    };
  },
  watch: {
    radio: function(newRadio) {
      this.$store.state.opt[this.$store.state.currentNum - 1] = newRadio;
      if (this.$store.state.opt[this.$store.state.currentNum - 1] != 0) {
        this.unComp = false;
      }
    },
    isFollow() {
      this.radio = this.$store.state.opt[this.$store.state.currentNum - 1];
      if (this.$store.state.opt[this.$store.state.currentNum - 1] == 0) {
        this.unComp = true;
      }
    }
  },
  computed: {
    isFollow() {
      return this.$store.state.currentNum;
    }
  },
  methods: {
    load() {},
    mounted() {},
    getradio() {
      this.$message({
        title: "radio",
        type: "success",
        message: "已提交" + this.radio,
        duration: 2000
      });
      console.log(this.$store.state.opt);
    },
    nextradio() {
      this.$store.state.currentNum++;
      if (this.$store.state.opt[this.$store.state.currentNum] == 0) {
        this.unComp = true;
      }
    }
  }
};
</script>

<style lang="scss">
#item {
  height: calc(100vh - 120px - 20px);
  padding: 20px;
  text-align: left;
}
.el-radio-group > div:nth-child(n) > tr:nth-child(n) > label:nth-child(1) {
  padding-right: 10vh;
}
.stickbuttom {
  position: sticky;
}
</style>
