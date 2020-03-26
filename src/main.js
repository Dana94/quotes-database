import Vue from 'vue'
import App from './App.vue'

import store from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { faTwitter  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faQuoteLeft, faQuoteRight, faChevronLeft, faChevronRight, faTwitter, faMoon, faSun )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
