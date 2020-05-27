<template>
  <div class="search">
    <select name id>
      <option value="A" v-for="author in authors" :key="author.id">{{author.name}}</option>
    </select>
  </div>
</template>

<script>
import gql from 'graphql-tag';

const authorsQuery = gql(`{
            authors {
              name
            }
          }`);

export default {
    name: 'Dropdown',
    data() {
        return {
            author: '',
            authors: []
        }
    },
    methods: {
        storeAuthor() {
            this.$store.dispatch('setSearch', this.search);
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

</style>
