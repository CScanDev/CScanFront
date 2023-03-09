<script setup lang="ts">
import Search from "@/components/Search.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <Search />
    <RouterView />
  </main>
</template>
