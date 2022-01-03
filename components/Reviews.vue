<template>
  <div>
    <h3>Customer Reviews</h3>
    <div>
      <p v-if="$fetchState.pending">Fetching Reviews...</p>
      <ReviewCard
        v-else
        v-for="(review, i) in reviews.results"
        :key="i"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [],
    };
  },
  async fetch() {
    this.reviews = await fetch("https://randomuser.me/api/?results=5").then(
      (res) => res.json()
    );
  },
};
</script>

<style>
</style>