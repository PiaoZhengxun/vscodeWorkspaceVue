import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// install axios 
//1 npm install --save axios vue-axios
// 2 import vue and vue-axios
// 3. use（vue and vue-axios）
import axios from 'axios'
import VueAxios from 'vue-axios'



createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
