<script setup lang="ts">
import { ref } from "vue";
import type { IUser } from "@/models/IUser";
import type { IProduct } from "@/models/IProduct";
import SearchService from "@/api/SearchService";
import IconSearch from "@/components/Icons/IconSearch.vue";


// state
const users = ref<IUser[]>([]);
const isLoading = ref(false);
const products = ref<IProduct[]>([]);
const searchValue = ref("");

const getData = async () => {
  console.log(searchValue.value);
  products.value = await SearchService.getSearchData(searchValue.value);
  console.log(users.value);
};
</script>

<template>
  <main>
    <div class="search">
      <div class="search-block">
        <input
          v-model="searchValue"
          @keyup.enter="getData"
          type="text"
          class="input-line"
          placeholder="Search"
        />
        <div @click="getData" class="rl">
          <IconSearch />
        </div>
      </div>
    </div>
    <div v-if="isLoading">loading</div>
    <div v-else>
      <div class="list">
        <div class="card-block" v-for="product in products" :key="product.id">
          <h2 class="title">{{ product.title }}</h2>
          <a :href="product.link" target="_blank" class="link card-block__text">Перейти</a>
          <p class="duration card-block__text">{{ product.duration }}</p>
          <p class="price card-block__text">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
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

  .rl {
    background-color: #fff;
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

    .link {
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
