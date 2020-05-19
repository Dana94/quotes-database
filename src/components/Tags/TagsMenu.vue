<template>
  <div class="menu" :class="{show: open, hide: (open !== null) && !open, dark: theme === 'dark'}">
    <button class="clear-tags" @click="clearTags">
      <font-awesome-icon icon="times" class="fa-lg" />
      clear
    </button>
    <tag v-for="tag in tags" :key="tag.id" :tag="tag" :clear="clear" />
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
      clear: false
    }
  },
  apollo: {
    tags: {
      query: tagsQuery,
      loadingKey: "Tags loading..."
    }
  },
  methods: {
    clearTags() {
      this.clear = true;
      // ??
      setTimeout(() => {
        this.clear = false;
      }, 1000);
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
  // TODO: organize colors
  background-color: #d6e7f3;
  box-shadow: 0px 3px 7px #0000004f;
  color: white;
  transform: translateY(-100%);
  padding: 0.5rem 0;

  &.dark {
    background-color: $dark-card;
  }

  &.show {
    animation: .5s ease-in forwards slidedown;
  }

  &.hide {
    animation: .5s ease-in forwards slideup;
  }
}

// TODO: same as tag buttons styles - share them
.clear-tags {
  background-color: white;
    color: black;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0.5rem 1rem;
    border: none;
    letter-spacing: 1px;
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
