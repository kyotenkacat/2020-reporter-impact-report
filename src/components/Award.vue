<template>
  <div id="award" class="section">
    <h2>獲獎紀錄</h2>
    <el-table :data="dataList" :span-method="tableSpan" border>
      <el-table-column prop="title" label="組織" min-width="136">
      </el-table-column>
      <el-table-column prop="award" label="獎項" min-width="204">
      </el-table-column>
      <el-table-column prop="item" label="作品" min-width="260">
      </el-table-column>
      <el-table-column prop="reason" label="得獎理由" min-width="260">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getAwardList } from '@/api/common';

export default {
  name: 'Award',
  data() {
    return {
      dataList: null,
      spanArr: [],
      titlePos: null,
    };
  },
  created() {
    this.dataList = getAwardList();
    this.getSpanArr(this.dataList);
  },
  methods: {
    getSpanArr(data) {
      this.spanArr.push({
        title: 1,
      });
      this.titlePos = 0;
      for (let i = 1; i < data.length; i += 1) {
        this.spanArr.push({
          title: 1,
        });
        if (data[i].title === data[i - 1].title) {
          this.spanArr[this.titlePos].title += 1;
          this.spanArr[i].title = 0;
        } else {
          this.spanArr.push({
            title: 1,
          });
          this.titlePos = i;
        }
      }
    },
    tableSpan({ rowIndex, columnIndex }) {
      // title
      if (columnIndex === 0) {
        const rowSpan = this.spanArr[rowIndex].title;
        const colSpan = rowSpan > 0 ? 1 : 0;
        return {
          rowspan: rowSpan,
          colspan: colSpan,
        };
      }
      return {
        rowspan: 1,
        colspan: 1,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#award {
  text-align: center;
  .el-table {
    text-align: left;
    ::v-deep .cell {
      color: $text-gray;
    }
  }
}
</style>
