<template>
  <div class="m-banner">
    <n-carousel autoplay show-arrow>
      <img
        class="carousel-img"
        src="../../src/assets/img/banner1.png"
      />
      <img
        class="carousel-img"
        src="../../src/assets/img/banner2.png"
      />
    </n-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<style>
.m-banner {
  width: 100%;
  height: 500px;
  background-color: lightcoral;
  
}
.carousel-img{
	width: 100%;
	height: 500px;
}
</style>
