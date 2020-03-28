<template>
  <div class="theme-switch">
    <font-awesome-icon :icon="['fas', 'sun']" class="fa-lg sun" v-show="lightTheme" />
    <font-awesome-icon :icon="['fas', 'moon']" class="fa-lg moon" v-show="!lightTheme" />
    <label class="switch">
      <input type="checkbox" @change="lightTheme = !lightTheme" />
      <span>
        <em></em>
      </span>
    </label>
  </div>
</template>

<script>

export default {
  data() {
    return {
      lightTheme: true
    }
  },
  watch: {
    lightTheme() {
      this.$store.dispatch('setTheme', this.lightTheme ? 'light' : 'dark');
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
.switch {
  margin-left: 0.5rem;
  height: 24px;
  display: block;
  position: relative;
  cursor: pointer;
  input {
    display: none;
    & + span {
      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 12px;
      }
      &:before {
        top: 0;
        left: 0;
        width: 42px;
        height: 25px;
        background: $light;
        transition: all 0.3s ease;
      }
      &:after {
        width: 18px;
        height: 18px;
        background: $white;
        top: 3px;
        left: 3px;
        box-shadow: 0 1px 3px rgba(#121621, 0.1);
        transition: all 0.45s ease;
      }
    }
    &:checked {
      & + span {
        &:before {
          background: rgba($dark, 0.35);
        }
        &:after {
          background: $white;
          transform: translate(18px, 0);
        }
        em {
          transform: translate(18px, 0);
          background: $dark;
          &:after {
            border-color: $dark;
            transform: rotate(0deg) translate(0, 0);
          }
        }
      }
    }
  }
}
</style>
