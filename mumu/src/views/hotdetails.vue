<template>
  <div class="s-nav">
    您现在的位置：<span class="s-home" @click="go">首页 </span>
    <span class="ar">></span>
    <span class="s-current">{{ data.q }}</span>
  </div>

  <div class="h-con">
    <div class="left">
      <h2 class="h-title">{{ data.q }}</h2>
      <pre>{{ data.r }}</pre>
    </div>
    <div class="right">
      <h2 class="h-title">相关推荐</h2>

      <div
        class="others-list"
        v-for="(item, i) in others"
        :key="i"
        @click="to(item)"
      >
        {{ item.q }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      data: null,
    };
  },
  computed: {
    ...mapGetters(["question"]),

    others() {
      return this.question.filter((x) => {
        return x.q != this.data.q;
      });
    },
  },
  created() {
    this.data = JSON.parse(this.$route.query.data);

    console.log(this.data);
  },

  methods: {
    to(item) {
      window.location.href = "/hot-details?data=" + JSON.stringify(item);
    },

    go() {
      this.$router.push('/')
    }
  },
};
</script>

<style lang="less">
@import url("@/less/index.less");
.ar {
  margin-left: 1rem;
  margin-right: 1rem;
}

.s-home,
.s-current {
  cursor: pointer;
  &:hover {
    color: @color;
  }
}

.s-nav {
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.h-con {
  display: flex;
  .left {
    width: calc(100% - 40rem);
    padding-right: 1rem;
    pre {
      white-space: pre-wrap;
      text-align: left;
      font-size: 1.8rem;
      line-height: 2.6rem;
    }
  }
  .right {
    width: 40rem;
    padding-left: 1rem;
  }
}

.h-title {
  text-align: left;
  font-size: 3.2rem;
}

.others-list {
  height: 5rem;
  text-align: left;
  line-height: 5rem;
  border-bottom: 0.1rem solid #eee;
  cursor: pointer;
  &:hover {
    color: @color;
  }
}
</style>
