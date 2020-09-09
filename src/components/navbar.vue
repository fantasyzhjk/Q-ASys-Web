<template>
  <div id="nav">
    <div class="navLeft" @click="jumpHome">
      <h1 class="title">在线答题系统</h1>
    </div>
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      @select="handleSelect"
      class="navRight"
    >
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item index="/answerPage">答题界面</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: ""
    };
  },
  mounted() {
    this.activeIndex = this.$route.path;
  },
  methods: {
    jumpHome() {
      this.activeIndex = "/";
      this.$router.push(this.activeIndex);
    },
    handleSelect(key) {
      this.activeIndex = key;
      this.$router.push(this.activeIndex);
    }
  }
};
</script>

<style lang="scss">
.navRight {
  float: right;
}
.navLeft {
  float: left;
}
.title {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0px;
  cursor: pointer;
}

.el-menu {
  border-bottom: none;
}
</style>