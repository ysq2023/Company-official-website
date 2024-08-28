<template>
  <div class="card-group">
    <div class="card" v-for="(item, i) in card" :key="i">
      <serve-card :data="item" />
    </div>
  </div>
</template>

<script>
import serveCard from "@/components/serveCard.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    serveCard,
  },
  data() {},

  computed: {
    ...mapGetters(["card"]),
  },

  mounted() {
    console.log(this.card);
  },
};
</script>

<style lang="less">
.card-group {
  display: flex;
  justify-content: space-between;
}
.card {
  width: calc(100% / 4 - 1rem);
  &:hover {
    img {
      transform: scale(1.2);
    }
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.13);
  }
}
</style>
