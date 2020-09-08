<template>
  <div id="nav">
    <div class="navLeft">
      <h1 class="title">在线答题系统</h1>
    </div>
    <el-menu
      mode="horizontal"
      :router="router"
      :default-active="activeIndex"
      @select="handleSelect"
      class="navRight"
    >
      <el-menu-item index="/About">关于</el-menu-item>
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item index="/answerPage">答题界面</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
      router: true
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
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
}

.el-menu {
  border-bottom: none;
}
</style>