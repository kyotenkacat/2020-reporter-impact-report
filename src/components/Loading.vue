<template>
  <div class="loading-wrapper">
    <div class="loading-spinner">
      <img src="@/assets/logo.png" alt="logo">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.loading-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  background: #000;
  .loading-spinner {
    position: absolute;
    text-align: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 40px;
    img {
      width: 40px;
      border-radius: 50%;
      animation: breath infinite 1s alternate-reverse;
    }
  }
}

@keyframes breath {
  0%   {
    box-shadow: 0px 0px 10px 8px rgba($color: #acabab, $alpha: 0.0);
    opacity: 0.3;
  }
  100% {
    box-shadow: 0px 0px 10px 8px rgba($color: #acabab, $alpha: 0.4);
    opacity: 1;
  }
}
</style>
