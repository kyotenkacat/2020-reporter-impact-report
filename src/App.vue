<template>
  <div id="app">
    <Overview></Overview>
    <Report></Report>
    <Article></Article>
    <Publication></Publication>
    <Award></Award>
  </div>
</template>

<script>
import Overview from '@/components/Overview.vue';
import Report from '@/components/Report.vue';
import Article from '@/components/Article.vue';
import Publication from '@/components/Publication.vue';
import Award from '@/components/Award.vue';

export default {
  name: 'App',
  components: {
    Overview,
    Report,
    Article,
    Publication,
    Award,
  },
};
</script>
