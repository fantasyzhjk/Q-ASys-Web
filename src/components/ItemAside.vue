<template>
  <div id="Aside">
    <el-table
      :data="tableData"
      style="width: 100%;max-height: 100%;"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column prop="no" />

      <!-- <el-table-column>
        <el-button 
        type="primary"
        size="mini" 
        @click.native.prevent="clickevent"
        round >查看</el-button>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    totalNum: Number
  },
  mounted() {
    // console.log(this.num)
    var str = [];
    for (let i = 0; i < this.totalNum; i++) {
      str[i] = { no: "第 " + (i + 1) + " 题", num: i + 1 };
      //   {"no": "第" + (i+1) + "题"},
    }
    this.tableData = str;
    console.log(this.tableData);
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      this.$message({
        title: "显示",
        type: "success",
        showClose: true,
        dangerouslyUseHTMLString: true,
        message: "题目: " + val.no + "<br>题号: " + val.num,
        duration: 500
      });
      this.$store.state.currentNum = val.num;
    }
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>

<style lang="scss">
.has-gutter {
  display: none;
}
</style>