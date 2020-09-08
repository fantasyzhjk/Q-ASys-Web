<template>
  <div id="app">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <router-view class="page" />
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>


<style lang="scss">
body {
  margin: 0%;
}

.page {
  max-height: calc(100vh - 60px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header {
  border-bottom: solid 1px #e6e6e6;
}
</style>
