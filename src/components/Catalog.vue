<script setup lang="ts">
import Card from './Card.vue';
import type { IUser } from "@/models/IUser"

const props = defineProps<{
    users: IUser[]
}>()
</script>

<template>
  <div class="catalog">
    <div class="catalog-container">
      <Card 
        v-for="user in users"
        :key="user.id"
        :user="user"
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



