<template>
  <div class="theme-switch">
    <font-awesome-icon :icon="['fas', 'sun']" class="fa-lg sun" v-show="!lightTheme" />
    <font-awesome-icon :icon="['fas', 'moon']" class="fa-lg moon" v-show="lightTheme" />
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
$primary: #5628ee;
$lightGrey: #99a3ba;
.theme-switch {
  position: absolute;
  right: 4rem;
  top: 1rem;
  display: flex;
  align-items: center;
}

.moon {
  color: #565656;
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
        background: #d7e0f1;
        transition: all 0.3s ease;
      }
      &:after {
        width: 18px;
        height: 18px;
        background: #fff;
        top: 3px;
        left: 3px;
        box-shadow: 0 1px 3px rgba(#121621, 0.1);
        transition: all 0.45s ease;
      }
      strong {
        // font-weight: normal;
        // position: relative;
        // display: block;
        // top: 1px;
        &:before,
        &:after {
          font-size: 14px;
          font-weight: 500;
          display: block;
          font-family: "Mukta Malar", Arial;
          -webkit-backface-visibility: hidden;
        }
        // &:before {
        //   content: "Unlocked";
        //   transition: all 0.3s ease 0.2s;
        // }
        // &:after {
        //   content: "Locked";
        //   opacity: 0;
        //   visibility: hidden;
        //   position: absolute;
        //   left: 0;
        //   top: 0;
        //   color: $primary;
        //   transition: all 0.3s ease;
        //   transform: translate(2px, 0);
        // }
      }
    }
    &:checked {
      & + span {
        &:before {
          background: rgba($primary, 0.35);
        }
        &:after {
          background: #fff;
          transform: translate(18px, 0);
        }
        em {
          transform: translate(18px, 0);
          background: $primary;
          &:after {
            border-color: $primary;
            transform: rotate(0deg) translate(0, 0);
          }
        }
        strong {
          &:before {
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            transform: translate(-2px, 0);
          }
          &:after {
            opacity: 1;
            visibility: visible;
            transform: translate(0, 0);
            transition: all 0.3s ease 0.2s;
          }
        }
      }
    }
  }
}
</style>
