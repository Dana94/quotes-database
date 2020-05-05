<template>
  <div id="app" :class="{light: theme === 'light', dark: theme === 'dark'}">
    <Toolbar />
    <div class="container">
      <h1>
        Quotes
        <br />
        <span>Database</span>
      </h1>
    <loading v-if="$apollo.queries.quotes.loading" :message="$apollo.queries.quotes.loadingKey" />
    <cards v-else :quotes="quotes"/>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Toolbar from './Layout/Toolbar.vue';
import Cards from './components/Cards/Cards';
import Loading from './components/Loading.vue';
import 'animate.css'

const quotesQuery = gql(`{
  quotes {
    quote
    author {
      name
      description
    }
  }
}`);

export default {
  name: 'App',
  data() {
    return {
      quotes: []
    }
  },
  apollo: {
    quotes: {
      query: quotesQuery,
      loadingKey: "Wisdom coming up..."
    },
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  created() {
    this.$store.dispatch('initTheme');
  },
  components: {
    Toolbar,
    Cards,
    Loading
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

  // margin-top: 60px;
}

.container {
  width: 90%;
  margin: 0 auto;
}

h1 {
  font-family: "Lobster", cursive;
  margin: 4rem 0;
  font-size: 3rem;

  span {
    margin-left: 5rem;
  }
}

@media (min-width: 768px) {
  // .container {
  //   width: 75%;
  // }
  h1 {
    font-size: 4rem;
  }
}

// testing
body {
  // margin: 0;
  // padding: 0px;
  // width: 100%;
}
#app {
  // height: 100%;
  min-height: 100vh;

  &.light {
    background-color: $light-bg;

    h1 {
      color: $dark-bg;
    }
  }

  &.dark {
    background-color: $dark-bg;

    h1 {
      color: $light-bg;
    }
  }
}
</style>
