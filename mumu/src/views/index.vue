<template>
  <mBanner />
  <mTitle h1="服务范围" h2="一站式互联网合规解决方案" />
  <el-button></el-button>
  <cardGroup />
  <img style="width: 100%; margin-top: 10rem" src="../../src/assets/img/banner3.png" alt="" />
  <mTitle h3="微信咨询:a1587177687ysq" />
  <img style="width: 100%;  " :src="others.url2" alt="" @click="go('serve')" />
  <mTitle h3="微信咨询:a1587177687ysq" />
  <img style="width: 100%" src="../../src/assets/img/advantageOne.png" alt="" />
  <mTitle h3="微信咨询:a1587177687ysq" />
  <mTitle h1="更多优势" h2="资深专家服务" />
  <m-more></m-more>
  <m-intro></m-intro>
  <!-- <mTitle h1="热门问答" /> -->
  <mTitle h1="热门问答" />
  <hot-que />
  <call-me />

  <!-- <div style="height: 20rem"></div> -->
</template>

<script>
import mBanner from "@/components/mBanner.vue";
import mTitle from "@/components/mTitle.vue";
import cardGroup from "@/components/cardGroup.vue";
// import cardGroup from "@/components/cardGroup.vue";
import mMore from "@/components/mMore.vue";
import mIntro from "@/components/mIntro.vue";
import hotQue from "@/components/hotQue.vue";
import callMe from "@/components/callMe.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    mBanner,
    mTitle,
    cardGroup,
    mMore,
    mIntro,
    hotQue,
    callMe,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["others"]),
  },

  methods: {
	  go(page) {
	  	this.$router.push("/" + page);
	  },
		  
	  
  },
};
</script>

<style></style>
