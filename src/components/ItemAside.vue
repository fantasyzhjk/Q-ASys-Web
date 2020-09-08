<template>
    <div id="Aside">
    <el-table :data="tableData" style="width: 100%;max-height:100%" :row-class-name="tableRowClassName" @row-click="clickevent">
    <el-table-column prop="no" />
    

    <!-- <el-table-column>
        <el-button 
        type="primary"
        size="mini" 
        @click.native.prevent="clickevent"
        round >查看</el-button>
    </el-table-column> -->
    
  </el-table>

    </div>
</template>

<script>
  export default {
      props: {
          num: Number,
      },
    mounted() {
        // console.log(this.num)
      var str = [];
      for (let i = 0; i < this.num; i++) {
        
        str[i] = {"no": "第 " + (i+1) + " 题","num": i}
        //   {"no": "第" + (i+1) + "题"},
      }
      this.tableData = str
      console.log(this.tableData)
    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex == 0) {
             return 'success-row';
            } else {
              console.log(row)
              console.log(rowIndex)
              return '';
        }
      },
        clickevent (row) {
            this.$notify({
            title: "显示",
            type: "success",
            dangerouslyUseHTMLString: true,
            message:
              "题目: " +
              row.no +
              "<br>位置: " +
              row.num,
            duration: 5000
          });
        },
    },
    data() {
      return {
        tableData: [
        ]
      }
    }
  }
</script>

<style lang="scss">
#Atabs {
    height: calc(100vh - 120px);
    width: 15vh;
}

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .has-gutter {
      display: none;
  }
</style>