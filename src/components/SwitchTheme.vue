<template>
  <div class="theme-switch">
    <a href="#" @click.prevent="toggleTheme">
      <font-awesome-icon :icon="['fas', 'sun']" class="fa-lg sun" v-show="theme === 'dark'" />
      <font-awesome-icon :icon="['fas', 'moon']" class="fa-lg moon" v-show="theme === 'light'" />
    </a>
  </div>
</template>

<script>

export default {
  name: 'SwitchTheme',
  data() {
    return {
      theme: 'light'
    }
  },
  methods: {
    toggleTheme () {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      this.$store.dispatch('setTheme', this.theme);
    }
  }
}
</script>

<style lang="scss">
$dark: #c5b9ef59;
$light: #abc8ff;
$white: #ffffff;

.theme-switch {
  margin-right: 1rem;
  display: flex;
  align-items: center;
}

.moon {
  color: #3f51b5;
}
.sun {
  color: orange;
}

@media (min-width: 768px) {
  .theme-switch {
    margin-right: 3rem;
  }
}
</style>
