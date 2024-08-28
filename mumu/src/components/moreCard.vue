<template>
  <div class="more-card-item">
    <img class="card-icon" :src="data.url" alt="" />
    <div class="card-tex">{{ data.text }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },

  props: ["data"],
};
</script>

<style lang="less">
@color: #3388ff;
.more-card-item {
  width: 25rem;
  height: 25rem;
  border-radius: 1.2rem;
  transition: .2s;
  cursor: pointer;
  border: 0.1rem solid #eee;
  box-shadow: 0 0.8rem 1.4rem 0 rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2rem);
    color: @color
  }

  .card-icon {
    width: 9.6rem;
    height: 9.6rem;
    margin-top: 51px;
  }

  .card-tex {
    margin-top: 2.5rem;
    font-size: 2.2rem;
  }
}
</style>
