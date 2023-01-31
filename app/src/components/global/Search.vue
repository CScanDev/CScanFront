<template>
    <div class="search">
        <div class="search-block">
            <input 
                v-model="searchValue" 
                type="text" 
                class="input-line" 
                placeholder="Search"
            />
            <IconSearch @click="onSubmit" />
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Search',

        emits: ["search"],
     
        data () {
            const searchValue = "";
            
            return {
                searchValue,
            };
        },

        methods:{
            onSubmit() {
                this.$emit("search", this.searchValue);
            },
        },
    };
</script>

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
