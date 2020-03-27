<template>
  <div id="app">
    <Toolbar />
    <div class="container">
      <h1>
        Quotes
        <br />
        <span>Database</span>
      </h1>
      <Cards />
    </div>
  </div>
</template>

<script>
// import Tags from './components/Tags/Tags.vue'
import Toolbar from './Layout/Toolbar.vue';
import Cards from './components/Cards/Cards.vue'
import 'animate.css'

export default {
  name: 'App',
  components: {
    // Tags,
    Toolbar,
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
  background-color: $light-bg;
  // margin-top: 60px;
}

.container {
  width: 75%;
  margin: 0 auto;
}

h1 {
  font-family: "Lobster", cursive;
  margin-bottom: 5rem;
  font-size: 3rem;

  span {
    margin-left: 5rem;
  }
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
}

// testing
body {
  // height: 100vh;
  margin: 0;
  padding: 0px;

  width: 100%;
}
#app {
  height: 100%;
}
</style>
