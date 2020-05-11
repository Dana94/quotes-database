<template>
  <div class="tags-container">
    <font-awesome-icon icon="chevron-left" class="fa-2x" />
    <div class="tags">
      <p v-if="$apollo.queries.tags.loading">{{$apollo.queries.tags.loadingKey}}</p>
      <tag v-else v-for="tag in tags" :key="tag.id" :tag="tag" />
    </div>
    <font-awesome-icon icon="chevron-right" class="fa-2x" />
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Tag from './Tag.vue';

const tagsQuery = gql`{tags}`;

export default {
  name: 'Tags',
  data(){
    return {
      tags: []
    }
  },
  apollo: {
    tags: {
      query: tagsQuery,
      loadingKey: "Tags loading..."
    }
  },
  components: {
    Tag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tags-container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Baloo Thambi 2", cursive;
}
.tags {
  display: flex;
}
.bracket-icon {
  width: 2rem;
  margin: 0 1rem; /* temp */
}
</style>
