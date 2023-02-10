<script setup lang="ts">
import type { IUser } from "@/models/IUser"

defineProps<{
  user: IUser
}>();
</script>

<template>
<div class="card">
  <div class="card-block">
    <h3 class="name"><!--{{ product_data.name }}-->{{ user.name }}</h3>
    <p class="price">Username: <!--{{ product_data.price }}-->{{ user.username }}</p>
    <p class="description"><!--{{ product_data.description }}--> {{ user.phone }}</p>
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