<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useRoute } from 'vue-router';
import SearchService from "@/api/SearchService"
import type { IUser } from "@/models/IUser"
import type { IProduct } from "@/models/IProduct";

// composables
const route = useRoute();
const users = ref<IUser[]>([])
const isLoading = ref(false)
const products = ref<IProduct[]>([])

onMounted(() => {
    const value = route.query.product
    getData(value as string)
})

// methods
const getData = async (searchValue:string) => {
    isLoading.value = true
    users.value = await SearchService.getSearchData(searchValue)
    isLoading.value = false
}
</script>

<template>
    <div>
        <div v-if="isLoading">loading</div>
        <div v-else>
            <div v-for="product in products">
                {{ product }}
            </div>
        </div>
    </div>
</template>