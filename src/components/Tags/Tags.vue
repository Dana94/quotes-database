<template>
  <div class="tags-container" v-if="!inMobile">
      <font-awesome-icon icon="chevron-left" class="fa-lg tag-arrow" />
      <div class="tags">
        <p v-if="$apollo.queries.tags.loading">{{$apollo.queries.tags.loadingKey}}</p>
        <tag v-else v-for="tag in tags" :key="tag.id" :tag="tag" />
      </div>
      <font-awesome-icon icon="chevron-right" class="fa-lg tag-arrow" />
  </div>
  <font-awesome-icon v-else icon="tags" class="fa-lg tags-icon" @click="toggleMenu" />
</template>

<script>
import gql from 'graphql-tag';

import Tag from './Tag/Tag.vue';

const tagsQuery = gql`{tags}`;

export default {
  name: 'Tags',
  data(){
    return {
      tags: [],
      showTags: null
    }
  },
  computed: {
    inMobile() {
      return window.innerWidth < 768
    }
  },
  methods: {
    toggleMenu() {
      this.showTags = !this.showTags
      this.$emit('show-tags', this.showTags);
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
  },
  created() {
    this.$emit('show-tags', this.showTags);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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

.tags-icon {
  margin: auto;
  margin-right: 2rem;
}
</style>
