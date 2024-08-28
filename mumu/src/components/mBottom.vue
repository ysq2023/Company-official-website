<template>
  <div class="m-bottom">
    <div class="m-bottom-main">
      <div class="m-bottom-item">
        <div class="icon-area">
          <img src="../assets/icon1.png" alt="" />
        </div>
        <div class="right-text">
          <div class="right-text-top">协助维权</div>
          <div class="right-text-bottom">蒙受经济损失，可申请百度协助</div>
        </div>
      </div>
      <div
        class="m-bottom-item"
        style="margin-left: 10rem; margin-right: 10rem"
      >
        <div class="icon-area"><img src="../assets/icon2.png" alt="" /></div>
        <div class="right-text">
          <div class="right-text-top">协助维权</div>
          <div class="right-text-bottom">蒙受经济损失，可申请百度协助</div>
        </div>
      </div>
      <div class="m-bottom-item">
        <div class="icon-area"><img src="../assets/icon3.png" alt="" /></div>
        <div class="right-text">
          <div class="right-text-top">协助维权</div>
          <div class="right-text-bottom">蒙受经济损失，可申请百度协助</div>
        </div>
      </div>
    </div>
    <div class="m-bottom-nav">
      <div class="m-nav" @click="go('home')">首页</div>
      <div class="m-nav" @click="go('serve')">服务项目</div>
      <div class="m-nav" @click="go('call')">联系我们</div>
      <div class="m-nav" @click="go('intro')">公司介绍</div>
    </div>

    <div class="ba">
      Copyright © 苍南频键网络科技有限公司
      地址：浙江省温州市苍南县灵溪镇都市御园14幢1106-1108室-30
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    go(to) {
      this.$router.push("/" + to);
    },
  },
};
</script>

<style lang="less">
@import url("@/less/index.less");
.m-bottom {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  background: rgb(248, 248, 248);
  height: 20rem;
  //   margin-top: 10rem;
  padding-top: 5rem;
  .m-bottom-main {
    display: flex;
    justify-content: center;
  }

  .m-bottom-item {
    display: flex;
    align-items: center;
  }

  .icon-area {
    width: 5rem;
    height: 5rem;
    // background-color: aqua;
    margin-right: 1rem;
  }

  .right-text {
    text-align: left;
  }

  .right-text-top {
    color: #000;
    margin-bottom: 0.5rem;
  }

  .right-text-bottom {
    color: #000;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #888;
  }

  .m-bottom-nav {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    .m-nav {
      color: #444;
      padding-left: 5rem;
      padding-right: 5rem;
      border-right: 0.1rem solid #ccc;
      cursor: pointer;
      &:last-child {
        border: none;
      }
      &:hover {
        color: @color;
      }
    }
  }
  .ba {
    margin-top: 4rem;
    color: #888;
    font-size: 1.2rem;
  }
}
</style>
