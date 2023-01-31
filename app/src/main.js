import { createApp } from 'vue'
import App from './App'
import  globalComponents  from './components'
//import  store  from './vuex/store.js'


//createApp(App).mount('#app')

const app = createApp(App);
app.use(globalComponents);
///app.use(store)
app.mount('#app')