<template>
  <div class="home">
    <m-header></m-header>
    <mContent></mContent>
    <m-bottom />
  </div>
</template>

<script>
import mHeader from "@/components/mHeader.vue";
import mContent from "@/views/mContent.vue";
import mBottom from "@/components/mBottom.vue";

export default {
  name: "HomeView",
  components: {
    mHeader,
    mContent,
    mBottom,
  },
};
</script>
