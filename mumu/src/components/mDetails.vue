<template>
  <div class="m-details">
    <div class="details-top">
      <div class="tab">产品详情</div>
    </div>

    <div class="page">
      <pre>{{ text }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["text"],

  mounted() {
    console.log(this.text);
  },
};
</script>

<style lang="less">
@import url("@/less/index.less");
.m-details {
  width: 100%;
  border: 0.1rem solid #eee;
  // box-sizing: border-box;
  margin-top: 5rem;
  .details-top {
    background-color: #f5f5f5;
    height: 6rem;
  }

  .tab {
    width: 18rem;
    height: 100%;
    border-top: 0.3rem solid @color;
    color: @color;
    text-align: center;
    line-height: 6rem;
    background-color: #fff;
  }

  .page {
    padding: 5rem;
    line-height: 2.6rem;
    pre {
      white-space: pre-wrap;
      text-align: left;
    }
  }
}
</style>
