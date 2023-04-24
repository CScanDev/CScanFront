<script setup lang="ts">
import {  onMounted, ref } from "vue";
import CoursesList from "@/api/CoursesList";
import type { IUser } from "@/models/IUser";
import type { IProduct } from "@/models/IProduct";

// state
const users = ref<IUser[]>([]);
const isLoading = ref(false);
const products = ref<IProduct[]>([]);

//methods
onMounted(async() => { 
  products.value = await CoursesList.getUserhCourses()
})

</script>

<template>
  <div>
    <div v-if="isLoading">loading</div>
    <div v-else>
      <div class="list">
        <div class="card-block" v-for="product in products" :key="product.id">
          <h2 class="title">{{ product }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  .card-block {
    width: 300px;
    height: 300px;
    background: #fcf6f6;
    border-radius: 5px;

    font-family: Inter, sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    line-height: 1.2;

    .card-block__text {
      background: #fcf6f6;
      margin: 20px;
    }

    .title {
      background: #fcf6f6;
      font-weight: 700;
      margin: 20px;
    }
  }
}
</style>
