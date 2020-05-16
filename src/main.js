import Vue from 'vue';
import App from './App.vue';

import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faMoon, faSun, faArrowLeft, faArrowRight, faSearch, faTags, faTimes } from '@fortawesome/free-solid-svg-icons'
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

library.add(faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faTwitter, faMoon, faSun, faArrowLeft, faArrowRight, faSearch, faTags, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
