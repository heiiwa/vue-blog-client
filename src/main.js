import Vue from 'vue'
import App from './App.vue'
import iview from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import { routes } from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
Vue.use(iview);

new Vue({
  el: '#app',
  router,  
  render: h => h(App)
})
