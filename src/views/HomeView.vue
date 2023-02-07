<script setup lang="ts">
import { ref, onMounted } from "vue";
import Search from "@/components/Search.vue";
import Catalog from "@/components/Catalog.vue";
import api from "@/api/index";
import type { IUser } from "@/models/IUser";

// state
const allUsers = ref<IUser[]>([]);
const searchValue = ref<string>("");

onMounted(async () => {
  getData();
});

// methods
const getData = async () => {
  allUsers.value = await api.getUsers(searchValue.value);
};

const findUser = (value: string) => {
  searchValue.value = value;
  getData();
};
</script>

<template>
  <main>
    <Search @on-search="findUser" />
    <Catalog :users="allUsers" />
  </main>
</template>
