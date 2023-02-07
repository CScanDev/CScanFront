<script setup lang="ts">
import type { IProduct } from "@/models/IProduct";

defineProps<{
  product: IProduct
}>();
</script>

<template>
<div class="card">
  <div class="card-block">
    <h3 class="name">{{ product.title }}</h3>
    <p class="price">{{ product.price }}</p>
    <p class="description">{{ product.duration }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
    .card-block{
        width: 250px;
        height: 200px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 8px 0 #000;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
            background-color: #fff;
        }
        .price {
            background-color: #fff;
        }
        
        .description {
            background-color: #fff;
            display: flex;
            text-align: center;
            color: gray;
        }
    }
</style>