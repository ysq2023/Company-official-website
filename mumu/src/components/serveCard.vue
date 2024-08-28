<template>
  <div class="card-main" @click="go">
    <div class="card-img-main">
      <img class="card-img" :src="data.url" />
    </div>
    <div class="card-text">{{ data.text }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["data"],

  methods: {
    go() {
      this.$router.push({
        path: "/serve-area",
        query: { data: JSON.stringify(this.data) },
      });
    },
  },
};
</script>

<style>
.card-main {
  width: 100%;
  height: 25rem;
  position: relative;
}
.card-img {
  /* width: 100%; */
  cursor: pointer;
  display: block;
  transition: 0.5s;
  height: 100%;
  transform-origin: center center;
  margin: 0 auto;
  /* transform: scale(0.8); */
}

.card-img-main {
  height: calc(100% - 5rem);
  overflow: hidden;
}

.card-text {
  color: #fff;
  height: 5rem;
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
  line-height: 5rem;
  border: 0.1rem solid #f5f5f5;
  background-color: #fff;
  color: #333;
}
</style>
