import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Cards from './components/Cards/Cards.vue';
import Quote from './components/Quote.vue';

import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faTwitter, faMoon, faSun)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Cards
    },
    {
      path: '/:id',
      component: Quote,
      props: true
    },
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
