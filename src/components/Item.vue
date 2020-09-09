<template>
  <div id="item">
    <table style="width:100%;">
      <tr>
        <p style="float: right;">第 {{ this.$store.state.currentNum }}/{{ totalNum }} 题</p>
        <p style="float: left;">请选出正确答案</p>
      </tr>
      <tr>
        <hr />
        <p>{{topic}}</p>
      </tr>
      <div style="height: 50px;" class="column-list">
        <el-radio-group v-model="radio">
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
        </el-radio-group>
        <hr />
        <el-progress
          style="width: 40%;float: left;padding: 10px;"
          :percentage="((this.$store.state.currentNum)*100)/this.totalNum"
        ></el-progress>
        <div style="float: right;" v-if="this.$store.state.currentNum == this.totalNum">
          <el-button @click="getradio" :disabled="unComp" :loading="false" icon="el-icon-check">提交</el-button>
        </div>
        <div style="float: right;" v-if="this.$store.state.currentNum < this.totalNum">
          <el-button @click="nextradio" :disabled="unComp">下一题</el-button>
        </div>
      </div>
    </table>
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
        message: "radio type = " + this.radio,
        duration: 500
      });
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
  padding: 20px;
  text-align: left;
}
</style>
