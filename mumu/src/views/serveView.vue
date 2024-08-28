<template>
  <div class="about">
    <img src="../../src/assets/img/banner2.png" class="img" alt="">
	<img src="../../src/assets/serve/serve1.jpg" alt="" class="img">
	<mTitle h3="微信咨询:a1587177687ysq" />
	<img src="../../src/assets/serve/serve2.jpg" alt="" class="img">
	<mTitle h3="微信咨询:a1587177687ysq" />
	<img src="../../src/assets/serve/serve3.jpg" alt="" class="img">
	<mTitle h3="微信咨询:a1587177687ysq" />
	<img src="../../src/assets/serve/serve4.jpg" alt="" class="img">
    <!-- <img src="https://jmy-pic.baidu.com/0/pic/-458837911_-518887841_-1864961454.jpg" alt=""> -->
  </div>
</template>
<script>
 
import mTitle from "@/components/mTitle.vue";
 
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    
    mTitle,
   
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
<style>
	.img{
		width: 150rem;
	}
</style>
