<script setup lang="ts">
import { ref } from "vue";
import IconSearch from "@/components/Icons/IconSearch.vue";
import { useRouter } from "vue-router";

// state
const searchValue = ref<string>("");
const router = useRouter();

//methods
const onSearch = () => {
  router.push({ query: { 'query': searchValue.value}})
}
</script>

<template>
  <div class="search">
    <div class="search-block">
      <input
        v-model="searchValue"
        type="text"
        class="input-line"
        placeholder="Search"
      />
      <IconSearch @click="onSearch"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-block {
  width: 350px;
  height: 40px;
  margin: 40px auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 40px;

  .input-line {
    width: 80%;
    margin-left: 20px;
    background-color: #fff;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 40px;
    color: gray;
  }

  .search-btn {
    cursor: pointer;
    text-decoration: none;
    color: #5e86d1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50px;
  }
}
</style>
