<template>
  <home-view></home-view>
</template>

<script>
import HomeView from "@/views/HomeView.vue"

export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style lang="less">
html, body {
  padding: 0;
  margin: 0;
  font-size: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1.6rem;
}
</style>
