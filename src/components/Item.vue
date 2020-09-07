<template>
  <div>
    <p>第{{ num }}题 {{ topic }}</p>
    <el-radio-group v-model="radio">
      <div v-if="type == 1">
        <el-radio :label="1">A. {{ answerA }}</el-radio>
        <el-radio :label="2">B. {{ answerB }}</el-radio>
        <el-radio :label="3">C. {{ answerC }}</el-radio>
        <el-radio :label="4">D. {{ answerD }}</el-radio>
      </div>
      <div v-if="type == 2">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="2">否</el-radio>
      </div>
    </el-radio-group>
    <div v-if="comp == true">
      <el-button @click="getradio">提交</el-button>
    </div>
    <div v-if="comp == false">
      <el-button @click="getradio">下一题</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "item",
  props: {
    topic: String,
    num: Number,
    type: Number,
    answerA: String,
    answerB: String,
    answerC: String,
    answerD: String,
    comp: Boolean
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
      this.$notify({
        title: "radio",
        type: "success",
        message: "radio type = " + this.radio,
        duration: 5000
      });
    }
  }
};
</script>

<style></style>
