<template>
  <div class="article-dialog">
    <el-dialog
      :visible="true"
      :before-close="closeDialog">
      <div class="header">
        <div class="word-wrap">
          <p class="title" v-html="content.title"></p>
          <div v-for="(author, index) in content.authorList" :key="index">
            <p class="author">{{ author.author }}</p>
            <p class="author-title">{{ author.authorTitle }}</p>
          </div>
        </div>
        <div class="img-wrap">
          <img v-if="windowWidth >= 1024" :src="require(`@/assets/author-${contentIndex}.png`)"
               alt="author-sketch">
        </div>
      </div>
      <div class="body">
        <div v-for="(item, index) in content.sectionList" :key="index">
          <p v-if="item.title" class="title" v-html="item.title"></p>
          <p v-if="item.subTitle" class="sub-title">{{ item.subTitle }}</p>
          <p v-for="(text, index) in item.textList" :key="index">
            {{ text }}
          </p>
        </div>
      </div>
      <div slot="footer" class="footer">
        <el-button @click="changeIndex('minus')" icon="el-icon-caret-left"></el-button>
        <el-button @click="changeIndex('add')" icon="el-icon-caret-right"></el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {
    dataList: Array,
    dataIndex: Number,
    windowWidth: Number,
  },
  data() {
    return {
      contentIndex: null,
      content: null,
    };
  },
  created() {
    this.contentIndex = this.dataIndex;
    this.content = this.dataList[this.contentIndex];
  },
  methods: {
    closeDialog() {
      this.$emit('closeDialog');
    },
    changeIndex(type) {
      if (type === 'minus') {
        this.contentIndex = this.contentIndex === 0
          ? this.dataList.length - 1 : this.contentIndex -= 1;
      } else {
        this.contentIndex = this.contentIndex === this.dataList.length - 1
          ? 0 : this.contentIndex += 1;
      }
      this.content = this.dataList[this.contentIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.article-dialog {
  text-align: left;
  .el-dialog__wrapper {
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::v-deep {
    .el-dialog {
      margin: 0 auto;
      @include mobileOnly() {
        width: 86%;
        min-width: 310px;
        height: 86vh;
        margin-top: 4vh !important;
      }
      @include tabletOnly() {
        width: 76%;
        height: 70vh;
      }
      @include desktopOnly() {
        width: 60%;
        height: 70vh;
      }
      @include hdAbove() {
        width: 56%;
        max-width: 807px;
        height: 70vh;
      }
      .el-dialog__header {
        padding: 0;
      }
      .el-dialog__body {
        display: flex;
        flex-direction: column;
        height: 100%;
        @include desktopAbove() {
          padding: 30px;
        }
      }
    }
  }
  .header {
    @include mobileOnly() {
      padding: 6px 0;
    }
    @include tabletAbove() {
      padding: 10px 0;
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
  }
  .body {
    flex-shrink: 1;
    overflow: auto;
    border-top: $text-gray 1px solid;
    @include mobileOnly() {
      height: 86vh;
    }
    @include tabletAbove() {
      height: 70vh;
    }
    .title {
      font-size: 22px;
      font-weight: bold;
    }
    .sub-title {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .footer {
    text-align: center;
    .el-button {
      margin: 0 10%;
      @include mobileOnly() {
        padding: 6px 8px;
      }
    }
  }
}
</style>
