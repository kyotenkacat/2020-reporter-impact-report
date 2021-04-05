<template>
  <div id="overview" class="section">
    <h1>2020年影響力報告</h1>
    <p class="title">這些報導並不朝生暮死，它們帶著應該被聽見的聲音，持續發聲。</p>
    <article class="intro">
      <p v-for="text in introList" :key="text">
        {{ text }}
      </p>
    </article>
    <div class="data-wrap">
      <div v-for="item in overviewList" :key="item.type" class="data-block" :class="item.type">
        <i :class="`el-icon-${item.icon}`"></i>
        <div class="word">
          <p>{{ item.title }}</p>
          <span>{{ item.count }} {{ item.quantifier }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOverviewIntro, getOverview } from '@/api/common';

export default {
  name: 'Overview',
  data() {
    return {
      introList: null,
      overviewList: null,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.introList = getOverviewIntro();
      this.overviewList = getOverview();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

#overview {
  text-align: center;
  article {
    p {
      font-size: 18px;
      margin: 40px auto;
      width: 80%;
      max-width: 600px;
      min-width: 288px;
    }
  }
  .data-wrap {
    display: flex;
    flex-wrap: wrap;
    @include tabletAbove() {
      justify-content: space-around;
    }
    @include tabletBelow() {
      justify-content: center;
    }
  }
  .data-block {
    color: #fff;
    @include hdAbove() {
      width: 18%;
      padding: 20px 0px;
      i {
        font-size: 50px;
        margin-right: 20px;
      }
    }
    @include hdBelow() {
      width: 48%;
      max-width: 380px;
      margin: 20px 0;
      padding: 10px 0px;
      i {
        font-size: 40px;
        margin-right: 10px;
      }
    }
    @include tabletBelow() {
      width: 72%;
    }
    &.topic {
      background-color: $red;
    }
    &.podcast {
      background-color: $blue;
    }
    &.component {
      background-color: $purple;
    }
    &.publication {
      background-color: $green;
    }
    &.award {
      background-color: $yellow;
    }
    i {
      display: inline-block;
      vertical-align: middle;
    }
    .word {
      display: inline-block;
      vertical-align: middle;
      @include hdAbove() {
        width: 42%;
        font-size: 24px;
      }
      @include tabletBelow() {
        width: 35%;
        font-size: 20px;
      }
      p {
        color: #fff;
        margin: 0 0 10px 0;
        font-weight: bold;
      }
      span {
        color: #fff;
        font-weight: bold;
      }
    }
  }
  p {
    &.title {
      font-size: 32px;
      width: 80%;
      max-width: 600px;
      margin: 20px auto;
    }
  }
  article {
    p {
      font-size: 20px;
    }
  }
}
</style>
