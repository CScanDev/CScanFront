<script setup lang="ts">

defineProps({
  products: Object,
});
</script>

<template>
  <div class="card-block">
    <h2 class="title">{{ products.title }}</h2>
    <p class="link">{{ products.link }}</p>
    <p class="duration">{{ products.duration }}</p>
    <p class="price">{{ products.price }}</p>
  </div>
</template>

<style scoped lang="scss">
.card-block{
  width: 300px;
  height: 300px;
  background: #fcf6f6;
  border-radius: 5px;

  font-family: Inter, sans-serif;
  font-weight: 400;
  word-wrap: break-word;
  line-height: 1.2;

  .title {
    background: #fcf6f6;
    font-weight: 700;
    margin: 20px;
  }

  .link {
    background: #fcf6f6;
    margin: 20px;
  }

  .price {
    background: #fcf6f6;
    margin: 20px;
  }

  .duration {
    background: #fcf6f6;
    margin: 20px;
  }
}
</style>
