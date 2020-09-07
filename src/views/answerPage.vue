<template>
  <div id="answerPage">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <Item
          v-bind:topic="Topic"
          num="250"
          type="1"
          answerA="答案A"
          answerB="答案B"
          answerC="答案C"
          answerD="答案D"
          comp="1"
        />
        <!-- <Login /> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  components: {
    Item
  },
  data() {
    return {
      Topic: "问题1"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 50px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
