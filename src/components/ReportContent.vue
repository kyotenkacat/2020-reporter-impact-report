<template>
  <div class="content">
    <div class="title" :class="type">{{ titleMapping[type] }}</div>
    <div v-if="type === 'influence'" class="block influence">
      <p v-for="(item, index) in content" :key="index">
        <span class="sub-title">{{ item.title }}</span>
        <span>{{ item.text }}</span>
      </p>
    </div>
    <div v-else class="block">
      <p v-for="(text, index) in content" :key="index">
        <i v-if="type === 'award'" class="el-icon-star-on"></i>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportContent',
  props: {
    type: String,
    content: Array,
  },
  data() {
    return {
      titleMapping: {
        influence: '影響力',
        award: '獎項肯定',
        intro: '報導簡介',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.content {
  width: 90%;
  margin: 0 auto;
  position: relative;
  .title {
    position: absolute;
    left: -14px;
    top: -10px;
    color: #fff;
    padding: 6px 14px;
    &.influence {
      background-color: $blue;
    }
    &.award {
      background-color: $yellow;
    }
    &.intro {
      background-color: $red;
    }
  }
  .block {
    background-color: #fff;
    margin: 30px 0;
    padding: 20px 20px 10px;
    p:not(:last-of-type) {
      margin: 20px 0;
    }
    &.influence {
      span {
        &.sub-title {
          font-weight: bold;
          display: block;
        }
      }
    }
  }
}
</style>
