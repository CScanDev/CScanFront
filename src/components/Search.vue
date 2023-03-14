<script setup lang="ts">
import { ref } from "vue";
import IconSearch from "@/components/Icons/IconSearch.vue";

// state
const searchValue = ref<String>("");
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelchValue: {
    type: String,
    default: "",
  },
});

const updateInput = (event: any) => emits(["update:modelValue"], console.log(event.target.value));
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
      <div @click=" (searchValue = '')" class="rl">
        <IconSearch />
      </div>
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
</style>
