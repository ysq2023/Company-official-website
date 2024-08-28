<template>
  <div class="s-nav">
    您现在的位置：<span class="s-home" @click="go">首页 </span>
    <span class="ar">></span>
    <span class="s-current">{{ data.text }}</span>
  </div>

  <div class="s-info">
    <div class="left-img"><img :src="data.url" alt="" /></div>
    <div class="right-item">
      <h1>{{ data.text }}</h1>
      <div class="note-group">
        <span v-for="(item, i) in data.note" :key="i" class="s-note">{{
          item
        }}</span>
      </div>

     <!-- <div class="s-btn-group">
        <div class="s-btn s-btn1">免费回电</div>
        <div class="s-btn s-btn2">立即联系</div>
      </div> -->
    </div>
  </div>

  <m-details :text="data.details" />

  <h2 class="other">相关推荐</h2>

  <div class="other-box">
    <div class="o-items" v-for="(item, i) in list" :key="i" @click="to(item)">
      <img :src="item.url" />
      <div class="o-brn">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
import mDetails from "@/components/mDetails.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    mDetails,
  },
  data() {
    return {
      data: null,
    };
  },

  computed: {
    ...mapGetters(["others", "card"]),

    list() {
      console.log(this.card);
      return this.card.filter((x) => {
        return x.text != this.data.text;
      });
      // this.card.filter
    },
  },

  methods: {
    go() {
      this.$router.push("/");
    },

    to(item) {
      // this.$router.go(0);
      // this.$router.push({
      //   path: "/serve-area",
      //   query: { data: JSON.stringify(item) },
      // });
      window.location.href = "/serve-area?data=" + JSON.stringify(item);
      // this.$nextTick(() => {
      //   location.reload();
      // });
    },
  },

  created() {
    this.data = JSON.parse(this.$route.query.data);
    // this.url = this.$route.query.url;
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

.s-info {
  display: flex;
}

.right-item {
  padding-left: 5rem;
  h1 {
    font-size: 2.8rem;
    text-align: left;
  }
}

.left-img {
  width: 40rem;
  border: 0.1rem solid #eee;
  img {
    width: 100%;
  }
}

.right-item {
  padding-left: 3rem;
}

.s-note {
  padding: 0.5rem;
  background-color: #f2f7ff;
  color: @color;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.s-btn {
  width: 14rem;
  height: 4rem;
  line-height: 4rem;
  border: 0.1rem solid @color;
  color: @color;
  margin-right: 1rem;
}

.note-group {
  text-align: left;
}

.s-btn-group {
  display: flex;
  margin-top: 2rem;
  cursor: pointer;
}

.s-btn1:hover {
  background-color: @color;
  color: #fff;
}

.s-btn2 {
  background-color: @color;
  color: #fff;
  opacity: 0.8;
}

.s-btn2:hover {
  opacity: 1;
}

.other {
  text-align: left;
}

.other-box {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
  img {
    width: 100%;
  }
}

.o-items {
  width: calc(100% / 3 - 1.3rem);
  cursor: pointer;
  &:hover {
    .o-brn {
      color: #fff;
      background-color: @color;
    }
  }
}

.o-brn {
  height: 6rem;
  line-height: 6rem;
  background-color: #f8f8f8;
}
</style>
