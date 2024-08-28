<template>
  <div class="m-intro">
    <div class="m-intro-main">
      <div class="in-left">
        <div class="in-title">{{ intro.title }}</div>
        <div class="in-text">{{ intro.text }}</div>
        <div class="in-button">公司详情</div>
      </div>
      <div class="in-right">
        <img :src="intro.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["intro"]),
  },
};
</script>

<style lang="less">
.m-intro {
  background-color: #f8f8f8;
  margin-top: 4rem;
}

.m-intro-main {
  width: 90%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.in-right {
  width: 79rem;
  height: 44rem;
}

.in-left {
  width: calc(100% - 79rem);
}

.in-title {
  font-size: 2.8rem;
  color: #000;
  text-align: left;
  margin-top: 6rem;
}

.in-text {
  margin-top: 2rem;
  font-size: 1.8rem;
  padding-right: 3rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* 定义文本的行数 */
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 4rem;
}

.in-button {
    width: 14rem;
    height: 4rem;
    background-color: #3388ff;
    text-align: center;
    line-height: 4rem;
    border-radius: 0.5rem;
    color: #fff;
    cursor: pointer;
    margin-top: 2rem;
    &:hover {
        opacity: 0.8;
    }
    }
</style>
