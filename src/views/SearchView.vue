<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SearchService from "@/api/SearchService";
//import type { IUser } from "@/models/IUser";
import ListProduct from "@/components/ListProduct.vue";
import type { IProduct } from "@/models/IProduct";

// composables
const route = useRoute();
//const users = ref<IUser[]>([]);
const isLoading = ref(false);
const products = ref<IProduct[]>([]);
const searchValue = ref<string>("");

onMounted(() => {
  //const value = route.query.product;
  searchValue.value = route.params.searchValue as string;
  SearchService.getSearchData(searchValue.value as string);
  getData(searchValue.value);
});

// methods
const getData = async (searchValue: string) => {
  isLoading.value = true;
  products.value = await SearchService.getSearchData(searchValue);
  isLoading.value = false;
};
</script>

<template>
  <div>
    <div v-if="isLoading">loading</div>
    <div v-else>
      <!--ListProduct :products="products" />-->
      <div class="list">
        <div class="card-block" v-for="product in products" :key="product.id">
          <h2 class="title">{{ product.title }}</h2>
          <p class="link">{{ product.link }}</p>
          <p class="duration">{{ product.duration }}</p>
          <p class="price">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
