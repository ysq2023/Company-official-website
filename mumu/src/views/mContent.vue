<template>
  <div class="my-content">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("@/less/index.less");
.my-content {
  width: @width;
  /* background-color: aquamarine; */
  margin: 0 auto;
  margin-top: 8rem;
  // height: 1000px;
}
</style>
