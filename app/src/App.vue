<template>
  <div id="app" class="app">
    <Search @search="findProduct"></Search>
    <Catalog :catalog="filtredCatalog"></Catalog>
  </div>
</template>

<script>
  import Search from './components/global/Search.vue'
  import Catalog from './components/global/Catalog.vue'

  export default {
    name: 'App',
    components: {
      Search,
      Catalog,
    },

    data(){
      const searchValue = "";
      const catalog = [
        {
          id: 1,
          name: "Apple",
          price: 100,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
        {
          id: 2,
          name: "Orange",
          price: 200,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
        {
          id: 3,
          name: "Banana",
          price: 300,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
        {
          id: 4,
          name: "Pineapple",
          price: 400,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
        {
          id: 5,
          name: "Potato",
          price: 500,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
        {
          id: 6,
          name: "Onion",
          price: 600,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi",
        },
      ]

      return {
        searchValue,
        catalog,
      };
    }, 

    computed: {
      filtredCatalog() {
        return this.catalog.filter((product) => {
          return product.name
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
        });
      },
    },

    methods: {
      findProduct(value) {
        this.searchValue = value
      },
    },
  };
</script>

<style lang="scss">
  $bgc: #272c36;

  *{
    background-color: $bgc;
  }
</style>
