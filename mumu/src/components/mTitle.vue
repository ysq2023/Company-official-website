<template>
  <h3 class="my-h1">{{ h1 }}</h3>
  <p class="my-h2">{{ h2 }}</p>
  <p class="my-h3">{{ h3 }}</p>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["h1", "h2", "h3"],

  methods: {},
};
</script>

<style>
.my-h1 {
  font-weight: 400;
  margin-bottom: 0;
  font-size: 3rem;
  color: #000;
}
.my-h2 {
  color: #999;
}

.my-h3 {
  color: #888;
  /* padding-top: 2rem;
  padding-bottom: 2rem; */
  font-size: 2rem;
}
</style>
