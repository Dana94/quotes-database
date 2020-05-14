<template>
  <div class="menu" :class="{show: open, hide: (open !== null) && !open}">
    <tag v-for="tag in tags" :key="tag.id" :tag="tag" />
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Tag from './Tag.vue';

const tagsQuery = gql`{tags}`;

export default {
  props: {
    open: Boolean
  },
  data () {
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

<style lang="scss">
.menu {
  // TODO: organize colors
  background-color: #d6e7f3;
  box-shadow: 0px 3px 7px #0000004f;
  color: white;
  transform: translateY(-63px); // need to know menu height

  &.show {
    animation: .5s ease-in forwards slidedown;
  }

  &.hide {
    animation: .5s ease-in forwards slideup;
  }
}

@keyframes slidedown {
  from {
    transform: translateY(-63px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slideup {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-63px);
  }
}
</style>
