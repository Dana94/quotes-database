<template>
  <div class="dropdown" :class="{dark: theme === 'dark'}">
    <p v-if="$apollo.queries.authors.loading" class="loading-message">
      {{$apollo.queries.authors.loadingKey}}
    </p>
    <template v-else>
      <label for="author-select">Choose an author:</label>
      <select v-model="authorSelected" id="author-select" name="authors">
        <option :value="null">All authors</option>
        <option v-for="author in authors" :value="author.id" :key="author.id">{{author.name}}</option>
      </select>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const authorsQuery = gql(`{
            authors {
              id
              name
            }
          }`);

export default {
    name: 'Dropdown',
    data() {
        return {
            authorSelected: "null",
            authors: []
        }
    },
    computed: {
      theme() {
        return this.$store.getters.getTheme;
      },
    },
    watch: {
      authorSelected() {
        this.$store.dispatch('setAuthor', this.authorSelected);

      }
    },
    apollo: {
      authors: {
        query: authorsQuery,
        loadingKey: "Authors loading..."
      }
    }
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  font-family: $body-font-family;
  font-size: 1rem;

  &.dark {
    color: $dark-card-text;
  }

  label {
    width: 100%;
    margin-right: 0.5rem;
  }

  select {
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    width: 100%;
    font-family: $body-font-family;
    font-size: 1rem;
  }
}

.loading-message {
  margin: 0;
}

@media (min-width: 768px) {
  .dropdown {
    margin: 0;
  }
}

@media (min-width: 670px) {
  .dropdown {
    flex-direction: row;

    label {
      width: 25%;
    }
  }
}
</style>
