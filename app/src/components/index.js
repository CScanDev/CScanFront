import Catalog from "./global/Catalog.vue";
import Search from "./global/Search.vue";
import Card from "./global/Card.vue";
import IconSearch from "./global/Icon/Search.vue";

const components = [
  { name: "Catalog", component: Catalog },
  { name: "Card", component: Card },
  { name: "IconSearch", component: IconSearch },
  { name: "Search", component: Search },
];

export default {
  install(app) {
    components.forEach(({ name, component }) => {
      app.component(name, component);
    });
  },
};