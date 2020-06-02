<template>
  <div class="dropdown">
    <select v-model="authorSelected">
      <option :value="null">All authors</option>
      <option v-for="author in authors" :value="author.id" :key="author.id">{{author.name}}</option>
    </select>
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
    watch: {
      authorSelected() {
        this.$store.dispatch('setAuthor', this.authorSelected);

      }
    },
    apollo: {
      authors: {
        query: authorsQuery
      }
    }
}
</script>

<style lang="scss">
@import "../assets/base.scss";

.dropdown {
  display: flex;
  margin-bottom: 1rem;

  select {
    border: none;
    border-radius: 10px;
    padding: 0.5rem;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .dropdown {
    margin: 0;
  }
}
</style>
