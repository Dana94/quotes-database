<template>
  <div id="app">
    <div class="container">
      <h1>
        Quotes
        <br />

        <span>Database</span>
      </h1>
      <!-- <Tags /> -->
      <Cards />
    </div>
  </div>
</template>

<script>
// import Tags from './components/Tags/Tags.vue'

import Cards from './components/Cards/Cards.vue'
import 'animate.css'

export default {
  name: 'App',
  components: {
    // Tags,
    Cards
  }
}
</script>

<style lang="scss">
@import "./assets/base.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 75%;
  margin: 0 auto;
}

h1 {
  margin-bottom: 5rem;

  span {
    margin-left: 5rem;
  }
}
</style>
