import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import App from './App.vue'
import Application from './application/views/Application.vue'

// import moment from 'moment'
// import 'moment/locale/fr';


// Vue.config.productionTip = false

Vue.use(VueRouter)


const routes = [
  { name: 'application', path: '/', component: Application },
]

const router = new VueRouter({
  routes: routes
})


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
