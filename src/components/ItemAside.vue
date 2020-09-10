<template>
  <div id="Aside">
    <el-table
      :data="tableData"
      style="width: 100px;max-height: 100%;"
      :row-class-name="tableRowClassName"
      @current-change="handleCurrentChange"
    >
      <el-table-column width="100" prop="no" />

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
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (this.$store.state.opt[rowIndex] != 0) {
        return "success-row";
      } else if (row.num == this.$store.state.currentNum) {
        return "warning-row";
      }
      return "";
    },
    handleCurrentChange(val) {
      this.currentRow = val;
      // this.$message({
      //   title: "显示",
      //   type: "success",
      //   showClose: true,
      //   dangerouslyUseHTMLString: true,
      //   message: "题目: " + val.no + "<br>题号: " + val.num,
      //   duration: 500,
      // });
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
.el-table__header-wrapper {
  display: none;
}
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #f0f9eb;
}
tr.el-table__row:nth-child(n) > td:nth-child(1) > div:nth-child(1) {
  text-align: center;
}
</style>
