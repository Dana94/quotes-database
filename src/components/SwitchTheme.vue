<template>
  <div class="theme-switch">
    <a href="#" @click.prevent="toggleTheme('light')">
      <font-awesome-icon :icon="['fas', 'sun']" class="fa-lg sun" v-show="theme === 'dark'" />
    </a>
    <a href="#" @click.prevent="toggleTheme('dark')">
      <font-awesome-icon :icon="['fas', 'moon']" class="fa-lg moon" v-show="theme === 'light'" />
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      theme: 'light'
    }
  },
  methods: {
    toggleTheme (theme) {
      this.theme = theme;
      console.log(this.theme)
      this.$store.dispatch('setTheme', theme);
    }
  }
}
</script>

<style lang="scss">
$dark: #c5b9ef59;
$light: #abc8ff;
$white: #ffffff;

.theme-switch {
  margin-right: 3rem;
  display: flex;
  align-items: center;
}

.moon {
  color: aliceblue;
}
.sun {
  color: orange;
}
</style>
