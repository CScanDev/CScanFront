<template>
    <div class="catalog">
        <div class="catalog-container">
            <Card 
                v-for="product in catalog"
                    :key="product.id"
                    v-bind:product_data="product"
            />

            {{ SearchValue }}
        </div>
    </div>
</template>

<script>
import Card from './Card.vue'

    export default {
        name: 'Catalog',

        components: {
            Card,
        },

        props: {
            catalog: {
                type: Array,
                required: true,
            }
        },

        data: () => ({ 
            SearchValue: '',
        }),
    }
</script>

<style lang="scss" scoped>
    .catalog-container{
        width: 900px;
        margin: 0 auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around; 
        align-items: center;
    }
</style>