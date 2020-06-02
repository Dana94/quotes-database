<template>
  <div class="nav-container">
    <nav :class="{dark: theme === 'dark'}">
      <!-- <SearchBar /> -->
      <Dropdown />
      <div class="icons">
        <font-awesome-icon
          tabindex="0"
          icon="tags"
          class="fa-lg tags-icon"
          @click="showTagsMenu = !showTagsMenu"
          @keydown.enter="showTagsMenu = !showTagsMenu"
        />
        <SwitchTheme />
      </div>
    </nav>
    <TagsMenu :open="showTagsMenu" />
  </div>
</template>

<script>
// import SearchBar from '../components/SearchBar.vue';
import Dropdown from '../components/Dropdown.vue';
import SwitchTheme from '../components/SwitchTheme.vue';
import TagsMenu from '../components/Tags/TagsMenu.vue';

export default {
  name: 'Toolbar',
  data() {
    return {
      showTagsMenu: null
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
  },
  components: {
    // SearchBar,
    Dropdown,
    SwitchTheme,
    TagsMenu
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";
.nav-container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 3;
}
nav {
  background-color: $light-menu;
  box-shadow: $nav-box-shadow;
  position: relative;
  top: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;

  &.dark {
    background-color: $dark-card;
  }

  .tags-icon {
    margin: auto;
    margin-right: 2rem;
  }

  .icons {
    display: flex;
  }
}

@media (min-width: 768px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
