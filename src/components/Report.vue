<template>
  <div id="report" class="section">
    <h2>專題報導</h2>
    <el-collapse v-model="activeNames">
      <el-collapse-item v-for="(item, index) in dataList" :key="index" :name="index">
        <template slot="title">
          <span class="title">{{ item.title }}</span>
          <span class="date">{{ item.date }}</span>
        </template>
        <ReportContent v-for="type in ['influence', 'award', 'intro']" :type="type" :key="type"
                       :content="item[type]">
        </ReportContent>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import ReportContent from '@/components/ReportContent.vue';
import { getReportList } from '@/api/common';

export default {
  name: 'Report',
  components: {
    ReportContent,
  },
  data() {
    return {
      activeNames: [0],
      dataList: null,
    };
  },
  created() {
    this.dataList = getReportList();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#report {
  text-align: center;
  .el-collapse {
    text-align: left;
    ::v-deep {
      .el-collapse-item__wrap {
        background-color: transparent;
      }
      .el-collapse-item__header {
        padding: 10px 20px;
        height: unset;
        line-height: 1.6;
        justify-content: space-around;
        font-weight: 400;
        font-size: 16px;
        .title {
          flex-grow: 1;
          margin-right: 10px;
        }
        .date {
          margin-right: 10px;
        }
        i {
          margin: 0;
        }
      }
      .el-collapse-item__content {
        font-size: 16px;
      }
    }
  }
}
</style>
