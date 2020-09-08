<template>
  <div id="item">
    <div style="height: 50px;">
      <p style="float: right;">第 {{ this.$store.state.currentNum }}/{{ totalNum }} 题</p>
      <p style="float: left;">请选出正确答案</p>
    </div>
    <hr />
    <p>{{topic}}</p>
    <div style="height: 50px;" class="column-list">
      <el-radio-group v-model="radio">
        <table>
          <div v-if="type == 1">
            <tr>
              <el-radio :label="1" border>A. {{ answerA }}</el-radio>
            </tr>
            <tr>
              <el-radio :label="2" border>B. {{ answerB }}</el-radio>
            </tr>
            <tr>
              <el-radio :label="3" border>C. {{ answerC }}</el-radio>
            </tr>
            <tr>
              <el-radio :label="4" border>D. {{ answerD }}</el-radio>
            </tr>
          </div>
          <div v-if="type == 2">
            <tr>
              <el-radio :label="1" border>是</el-radio>
            </tr>
            <tr>
              <el-radio :label="2" border>否</el-radio>
            </tr>
          </div>
        </table>
      </el-radio-group>
      <hr />
      <div style="height: 50px;">
        <el-progress
          style="width: 35%;float: left;padding: 10px;"
          :percentage="(this.$store.state.currentNum*100)/this.totalNum"
        ></el-progress>
        <div style="float: right;" v-if="this.$store.state.currentNum == this.totalNum">
          <el-button @click="getradio">提交</el-button>
        </div>
        <div style="float: right;" v-if="this.$store.state.currentNum < this.totalNum">
          <el-button @click="nextradio">下一题</el-button>
        </div>
      </div>
    </div>
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
    comp: Boolean,
    totalNum: Number
  },
  data() {
    return {
      radio: 0
    };
  },
  methods: {
    load() {},
    mounted() {},
    getradio() {
      this.$message({
        title: "radio",
        type: "success",
        message: "radio type = " + this.radio,
        duration: 500
      });
    },
    nextradio() {
      this.$message({
        title: "radio",
        type: "success",
        message: "radio type = " + this.radio,
        duration: 500
      });
      this.$store.state.currentNum++;
    }
  }
};
</script>

<style lang="scss">
#item {
  padding: 20px;
  text-align: left;
}
</style>
