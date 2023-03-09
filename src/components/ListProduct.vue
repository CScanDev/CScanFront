<script setup lang="ts">
import Card from "./Card.vue";

defineProps({
  products: Object,
});
</script>

<template>
  <div class="list">
    <Card 
        :products="products" 
    />
  </div>
</template>

<style scoped lang="scss">
.list {
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
</style>
