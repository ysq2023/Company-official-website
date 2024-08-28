<template>
  <div class="hot-qes">
    <div class="hot-left">
      <div
        class="hot-items"
        v-for="(item, i) in question"
        :key="i"
        :class="currentIndex == i ? 'hot-items-active' : ''"
        @mouseenter="mouseIn(i)"
        @click="go(item)"
      >
        <span class="hot-index" :class="i < 3 ? 'color' + i : ''">{{
          i + 1
        }}</span>
        <span class="hot-title">{{ item.q }}</span>
      </div>
    </div>
    <div class="hot-right">
      <m-que :details="currentVal" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import mQue from "@/components/mQue.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      currentVal: null,
    };
  },

  components: {
    mQue,
  },

  computed: {
    ...mapGetters(["question"]),
  },

  methods: {
    mouseIn(Index) {
      this.currentIndex = Index;
      this.currentVal = this.question[Index];
    },

    go(item) {
      this.$router.push({
        path: "/hot-details",
        query: { data: JSON.stringify(item) },
      });
      // path: "/serve-area",
      //   query: { data: JSON.stringify(this.data) },
    },
  },

  created() {
    this.currentVal = this.question[this.currentIndex];
    console.log(this.currentVal);
  },
};
</script>

<style lang="less">
.hot-qes {
  width: 90%;
  height: 40rem;
  background-color: #f8f8f8;
  margin: 0 auto;
  padding: 2rem 0 2rem 2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 0.1rem solid #eee;
  border-radius: 1rem;
  .hot-left {
    width: 40%;
    height: 100%;
  }
  .hot-right {
    background-color: #fff;
    width: 60%;
    height: calc(100% + 4rem);
    padding: 4rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }

  .hot-items {
    width: 100%;
    height: calc(100% / 6);
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.8rem;
    .hot-index {
      font-size: 2rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    // &:hover {
    //   .hot-items-active;
    // }
  }

  .hot-items-active {
    background-color: #fff;
    border-radius: 1rem 0 0 1rem;
  }

  .color0 {
    color: #ff4542;
  }

  .color1 {
    color: #ff6600;
  }

  .color2 {
    color: #ffa866;
  }
}
</style>
