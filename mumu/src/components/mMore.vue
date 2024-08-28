<template>
  <div class="more-card">
    <moreCard :data="item" v-for="(item, i) in more" :key="i"/>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import moreCard from "@/components/moreCard.vue";

export default {
  data() {
    return {};
  },

  components: {
    moreCard,
  },

  computed: {
    ...mapGetters(["more"]),
  },
};
</script>

<style>
.more-card {
  display: flex;
  justify-content: space-around;
  margin-top: 3rem
}
</style>
