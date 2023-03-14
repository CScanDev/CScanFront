<script setup lang="ts">
import {  onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SearchService from "@/api/SearchService";
import Search from "@/components/Search.vue";
import type { IUser } from "@/models/IUser";
import type { IProduct } from "@/models/IProduct";

// state
const route = useRoute();
const users = ref<IUser[]>([]);
const isLoading = ref(false);
const products = ref<IProduct[]>([]);
const searchValue = ref<string>("1");

/*onMounted(() => {
  //const value = route.query.product;
  searchValue.value = route.params.searchValue as string;
  console.log(searchValue.value);
  SearchService.getSearchData(searchValue.value as string);
  getData(searchValue.value);
});*/

/*const sendData = () => {
  searchValue.value = route.params.searchValue as string;
  console.log(searchValue.value);
  SearchService.getSearchData(searchValue.value as string);
  getData(searchValue.value);
};*/

// methods
/*const getData = async (searchValue: string) => {
  isLoading.value = true;
  //const value = route.params.searchValue as string;
  users.value = await SearchService.getSearchData('1');
  console.log(users.value);
  isLoading.value = false;
};*/
</script>

<template>
  <div>
    <div v-if="isLoading">loading</div>
    <div v-else>
      <div class="list">
        <div class="card-block" v-for="product in users" :key="product.id">
          <h2 class="title">{{ product.name }}</h2>
          <!--<p class="link card-block__text">{{ product.link }}</p>
          <p class="duration card-block__text">{{ product.duration }}</p>
          <p class="price card-block__text">{{ product.price }}</p>-->
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
