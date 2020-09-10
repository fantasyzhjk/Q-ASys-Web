<template>
  <div class="home">
    <el-scrollbar style="height:100%">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="欢迎来 吴优.js App" />
    </el-scrollbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  metaInfo: {
    title: "在线答题系统",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      }
    ]
  },
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home {
  max-height: 100%;
  height: calc(100vh - 120px);
}
</style>
