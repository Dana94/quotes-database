<template>
  <div class="menu" :class="{show: open, hide: (open !== null) && !open, dark: theme === 'dark'}">
    <tag tag="clear">
      <font-awesome-icon icon="times" class="fa-lg" />
      clear
    </tag>
    <tag v-for="tag in tags" :key="tag.id" :tag="tag">
      {{tag}}
    </tag>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Tag from './Tag/Tag.vue';

const tagsQuery = gql`{tags}`;

export default {
  props: {
    open: Boolean
  },
  data () {
    return {
      tags: [],
    }
  },
  apollo: {
    tags: {
      query: tagsQuery,
      loadingKey: "Tags loading..."
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  components: {
    Tag
  }
}
</script>

<style lang="scss">
@import "../../assets/base.scss";

.menu {
  background-color: $light-menu;
  box-shadow: $nav-box-shadow;
  color: white;
  transform: translateY(-100%);
  padding: 0.5rem 0;

  &.dark {
    background-color: $dark-card;
  }

  &.show {
    animation: 0.5s ease-in forwards slidedown;
  }

  &.hide {
    animation: 0.5s ease-in forwards slideup;
  }
}

@keyframes slidedown {
  from {
    transform: translateY(-100%);
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
    transform: translateY(-100%);
  }
}
</style>
