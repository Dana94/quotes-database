<template>
  <div id="app" :class="{light: theme === 'light', dark: theme === 'dark'}">
    <Toolbar />
    <div class="container">
      <header>
        <h1>
          Quotes
          <br />
          <span>Database</span>
        </h1>
      </header>
      <main>
        <loading
          v-if="$apollo.queries.quotes.loading"
          :message="$apollo.queries.quotes.loadingKey"
        />
        <cards v-else-if="!!quotes" :quotes="quotes" />
        <error v-else/>
      </main>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Toolbar from './Layout/Toolbar.vue';
import Cards from './components/Cards/Cards';
import Loading from './components/Loading.vue';
import Error from './components/Error.vue';
import 'animate.css';

export default {
  name: 'App',
  data() {
    return {
      quotes: []
    }
  },
  apollo: {
    quotes: {
      query () {
        if (this.authorSelected !== null) {
          return gql`query authorQuotes($id: Int!) {
            quotesByAuthorId(authorId: $id) {
              quote
              author {
                name
                description
              }
            }
          }`
        } else if(this.tags.length > 0) {
          return gql`query tagQuotes($tags: [String]!) {
            quotesByTagNames(tags: $tags) {
              quote
              author {
                name
                description
              }
            }
          }`
        }
        else {
          return gql(`{
            quotes {
              quote
              author {
                name
                description
              }
            }
          }`)
        }
      },
      loadingKey: "Wisdom coming up...",
      update: data => data.quotesByAuthorId || data.quotesByTagNames || data.quotes,
      variables () {
        return {
          id: this.authorSelected,
          tags: this.tags
        }
      },
    },
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
    search() {
      return this.$store.getters.getSearch;
    },
    authorSelected() {
      return this.$store.getters.getAuthor;
    },
    tags() {
      return this.$store.getters.getTags;
    }
  },
  created() {
    this.$store.dispatch('initTheme');
  },
  components: {
    Toolbar,
    Cards,
    Loading,
    Error
  }
}
</script>

<style lang="scss">
@import "./assets/base.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;

  &.light {
    background-color: $light-bg;

    h1,
    .search-icon,
    .tags-icon {
      color: $dark-bg;
    }
  }

  &.dark {
    background-color: $dark-bg;

    h1,
    .search-icon,
    .tag-arrow,
    .tags-icon {
      color: $light-bg;
    }
  }
}

.container {
  width: 90%;
  margin: 0 auto;
  padding-top: 5rem;
}

h1 {
  font-family: "Lobster", cursive;
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
</style>
