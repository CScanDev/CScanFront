<template>
    <div class="card">
        <div class="card-block">
            
            <h3 class="name">{{ product_data.name }}</h3>
            <p class="price">Price: {{ product_data.price }}</p>
            <p class="description">{{ product_data.description }}</p>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            product_data: {
                type: Object,
                default (){
                    return {}
                }
            }
        },
     
        data () {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-block{
        width: 250px;
        height: 200px;
        background-color: #fff;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 0 0 8px 0 #000;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
            background-color: #fff;
        }

        .price {
            background-color: #fff;
        }

        

        .description {
            background-color: #fff;
            display: flex;
            text-align: center;
            color: gray;
        }
    }
</style>