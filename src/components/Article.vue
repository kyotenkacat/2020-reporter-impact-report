<template>
  <div id="article" class="section">
    <h2>報導者的話</h2>
    <el-card v-for="(data, index) in dataList" :key="index" class="card"
             @click.native="openDialog(index)" shadow="never">
      <div slot="header" class="card-header">
        <div class="word-wrap">
          <p class="title" v-html="data.title"></p>
          <p class="author">{{ data.authorList[0].author }}</p>
          <p class="author-title">{{ data.authorList[0].authorTitle }}</p>
        </div>
        <div class="img-wrap" v-if="windowWidth >= 1024">
          <img :src="require(`@/assets/author-${index}.png`)"
               alt="author-sketch">
        </div>
      </div>
      <div class="card-body">
        <span>{{ getText(data.sectionList) }}</span>
        <div class="btn-wrap">
          <el-button type="text" class="more-btn">More</el-button>
        </div>
      </div>
    </el-card>
    <ArticleContent v-if="dialogVisible" :dataList="dataList" :dataIndex="dataIndex"
                    :windowWidth="windowWidth" @closeDialog="dialogVisible = false">
    </ArticleContent>
  </div>
</template>

<script>
import ArticleContent from '@/components/ArticleContent.vue';
import { getArticleList } from '@/api/common';

export default {
  name: 'Article',
  components: {
    ArticleContent,
  },
  data() {
    return {
      dataList: null,
      dialogVisible: false,
      dataIndex: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.dataList = getArticleList();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getText(sectionList) {
      const text = sectionList[0].textList[0];
      return text.slice(0, 120).concat('……');
    },
    openDialog(index) {
      this.dataIndex = index;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#article {
  text-align: center;
  @include tabletAbove() {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    width: 100%;
  }
  .card {
    text-align: left;
    cursor: pointer;
    @include mobileOnly() {
      margin-bottom: 30px;
    }
    @include tabletAbove() {
      display: inline-block;
      width: 48%;
      margin: 1% 0;
      &:nth-child(even) {
        margin-right: 4%;
      }
    }
    ::v-deep {
      .el-card__header {
        @include desktopBelow() {
          padding: 8px 16px;
        }
        @include desktopAbove() {
          padding: 24px;
        }
      }
      .el-card__body {
        @include desktopBelow() {
          padding: 16px;
        }
        @include desktopAbove() {
          padding: 24px;
        }
      }
    }
    .card-header {
      position: relative;
      p {
        margin: 8px 0;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .author-title {
        font-size: 12px;
      }
      .word-wrap {
        @include desktopAbove() {
          width: 60%;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .img-wrap {
        width: 30%;
        display: inline-block;
        vertical-align: middle;
        text-align: right;
        margin-left: 4%;
        img {
          width: 100%;
        }
      }
    }
    .card-body {
      .btn-wrap {
        text-align: right;
        .more-btn {
          padding: 6px 8px 0;
          text-decoration: underline;
          text-decoration-color: $text-gray;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
