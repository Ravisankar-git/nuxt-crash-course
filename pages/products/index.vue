<template>
  <div>
    <div class="container">
      <LargeCardDisplay
        v-for="card in largeCardInfo.slice(0, 1)"
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
import { largeCardSections, smallCardSections } from "@/assets/data.js";
export default {
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
};
</script>

<style>
</style>