<template>
  <div>

    <div>
      <TheHero />
      <LargeCardDisplay
        v-for="card in largeCardInfo"
        :key="card.id"
        :card="card"
      />
      <SmallCardDisplay
        v-for="card in smallCardInfo"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "../assets/data.js";
export default {
  name: "IndexPage",

  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
};
</script>

<style scoped>
</style>
