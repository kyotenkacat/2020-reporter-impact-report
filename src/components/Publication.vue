<template>
  <div id="publication" class="section">
    <h2>出版品</h2>
    <div v-for="(data, index) in dataList" :key="index" class="block">
      <div class="img-wrap">
        <img :src="require(`@/assets/publication-${index}.png`)" alt="">
      </div>
        <div class="title-wrap">
          <p class="title">{{ data.title }}</p>
        </div>
        <div class="info-wrap">
          <p v-for="(info, index) in data.infoList" :key="index"
            class="info">
            <span>{{ info.type }}</span>
            <span>  {{ info.info }}</span>
          </p>
        </div>
      <div class="text-wrap">
        <p>
          <span class="author">文／{{ data.authorInfo.author}}</span>
          <span>  {{ data.authorInfo.authorTitle}}</span>
        </p>
        <span class="tip">{{data.authorInfo.tip }}</span>
        <p v-for="(text, index) in data.textList" :key="index" class="text">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getPublicationList } from '@/api/common';

export default {
  name: 'Publication',
  data() {
    return {
      dataList: null,
    };
  },
  created() {
    this.dataList = getPublicationList();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#publication {
  text-align: center;
  .block {
    text-align: left;
    background-color: #fff;
    padding: 20px;
    display: inline-block;
    margin-bottom: 20px;
    vertical-align: top;
    @include desktopOnly() {
      width: 49%;
      &:nth-child(even) {
        margin-right: 2%;
      }
    }
    @include hdAbove() {
      width: 48%;
      &:nth-child(even) {
        margin-right: 4%;
      }
    }
    .img-wrap {
      @include tabletAbove() {
        float: left;
        width: 30%;
        margin-right: 2%;
      }
      img {
        width: 100%;
      }
    }
    .title-wrap {
      .title {
        font-size: 24px;
        font-weight: bold;
      }
    }
    .info-wrap {
      .info {
        font-size: 14px;
      }
    }
    .text-wrap {
      .author {
        font-size: 16px;
      }
      .tip {
        font-size: 12px;
      }
    }
  }
}
</style>
