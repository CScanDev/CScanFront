<script setup lang="ts">
import Card from './Card.vue';
import type { IProduct } from "@/models/IProduct";

const props = defineProps<{
    products: IProduct[]
}>()
</script>

<template>
  <div class="catalog">
    <div class="catalog-container">
      <Card 
        v-for="product in products"
        :key="product.id"
        :product="product"
      />   
    </div>
  </div>
</template>

<style scoped lang="scss">
    .catalog-container {
        width: 900px;
        margin: 40px auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
</style>



