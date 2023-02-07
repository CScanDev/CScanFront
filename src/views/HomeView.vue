<script setup lang="ts">
import { ref, onMounted } from "vue";
import Search from "@/components/Search.vue";
import Catalog from "@/components/Catalog.vue";
import api from "@/api/index";
import type { IProduct } from "@/models/IProduct";

// state
const allProducts = ref<IProduct[]>([]);
const searchValue = ref<string>("");

onMounted(async () => {
  getData();
});

// methods
const getData = async () => {
  allProducts.value = await api.getUsers(searchValue.value);
};

const findUser = (value: string) => {
  searchValue.value = value;
  getData();
};
</script>

<template>
  <main>
    <Search @on-search="findUser" />
    <Catalog :products="allProducts" />
  </main>
</template>
