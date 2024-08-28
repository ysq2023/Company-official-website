<template>
  <div class="m-que">
    <div class="q-title">
      <div class="q-wen">问</div>
      <div class="q-wen-title">{{ details.q }}</div>
    </div>

    <div class="q-title qd-title">
      <div class="q-wen q-da">答</div>
      <pre class="q-wen-title q-da-content">{{ details.r }}</pre>
    </div>

    <div class="go-more" @click="goMore">
      查看更多<span class="more-icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["details"],

  methods: {
    goMore() {
      console.log("更多");
    },
  },

  mounted() {
    console.log(this.details);
  },
};
</script>

<style lang="less">
@import url("@/less/index.less");
.m-que {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.q-wen {
  width: 3.6rem;
  height: 3.6rem;
  background-color: #d6e4ff;
  color: @color;
  font-size: 1.8rem;
  text-align: center;
  line-height: 3.6rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
}

.q-da {
  background-color: @color;
  color: #fff;
}

.qd-title {
  margin-top: 2rem;
  align-items: top;
}

.q-title {
  display: flex;
  justify-content: left;
  align-items: baseline !important;
}

.q-wen-title {
  font-weight: 600;
  font-size: 2rem;
  color: #000;
}

.q-da-content {
  font-size: 1.6rem;
  font-weight: 300;
  text-align: left;
  width: calc(100% - 4.6rem);
  white-space: pre-wrap;
  color: #444;
  line-height: 3rem;
}

.go-more {
  color: @color;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 1.8rem;
  // background-color: rgba(fff,fff,fff,0.8);
  width: 100%;
  height: 16rem;
  line-height: 25rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 66%);
  cursor: pointer;
}

.more-icon {
  width: 1rem;
  height: 1rem;
  border-top: 0.2rem solid @color;
  border-right: 0.2rem solid @color;
  display: inline-block;
  transform: rotate(45deg);
}
</style>
