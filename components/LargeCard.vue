<template>
  <NuxtLink :to="`/products/${lcard.id}`" class="card">
    <img
      :src="require(`../assets/images/${lcard.image}`)"
      alt=""
      class="image"
    />
    <h3 class="header">
      {{ lcard.title }}
    </h3>
    <p class="snippet">
      {{ lcard.snippet }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    lcard: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 31.5%;
  height: 25rem;
  border: none;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}
.image {
  height: 65%;
  border-radius: 0.5rem;
}
.header {
  font-size: 1.15rem;
  margin-top: 0.4rem;
}
.snippet {
  color: grey;
}
</style>
