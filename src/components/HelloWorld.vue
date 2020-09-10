<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="login('/login')">登录</el-button>
    <el-button type="primary" @click="login('/answerPage')">考试</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    login(path) {
      this.$router.push(path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
