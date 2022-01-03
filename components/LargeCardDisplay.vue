<template>
  <div class="container">
    <h4 class="header">
      {{ card.title }}
    </h4>
    <p class="snippet">
      {{ card.snippet }}
    </p>
    <div class="cards-container">
      <LargeCard v-for="cards in card.cards" :key="cards.id" :lcard="cards" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
.header {
  font-weight: 700;
  font-size: 1.5rem;
}
.snippet {
  color: grey;
  margin-bottom: 1.5rem;
}
.cards-container {
  display: flex;
  justify-content: space-between;
}
</style>
