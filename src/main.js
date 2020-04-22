import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import Cards from './components/Cards/Cards.vue';
import Quote from './components/Quote.vue';

import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faMoon, faSun, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://hopeful-goldberg-bf6881.netlify.app/'
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

library.add(faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faTwitter, faMoon, faSun, faArrowLeft, faArrowRight)

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
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
