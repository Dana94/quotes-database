<template>
  <div
    class="card"
    :class="{
      grow: index === cardIndex && cardIndex !== null,
      shrink: index !== cardIndex && cardIndex !== null,
      hide: index !== cardIndex && cardIndex !== null
    }"
  >
    <div
      class="under-card"
      :class="[
        index % 5 === 0 ? blue :
        index % 4 === 0 ? green :
        index % 3 === 0 ? yellow :
        index % 2 === 0 ? orange :
        pink
      ]"
    ></div>
    <div class="primary-card">
      <font-awesome-icon
        icon="quote-left"
        class="fa-2x quote-icon"
        :class="[
        index % 5 === 0 ? blue :
        index % 4 === 0 ? green :
        index % 3 === 0 ? yellow :
        index % 2 === 0 ? orange :
        pink
      ]"
      />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      <font-awesome-icon
        icon="quote-right"
        class="fa-2x quote-icon"
        :class="[
        index % 5 === 0 ? blue :
        index % 4 === 0 ? green :
        index % 3 === 0 ? yellow :
        index % 2 === 0 ? orange :
        pink
      ]"
      />
      <a href="#" @click="expandCard" class="show-more">
        Show
        <span v-if="!expand">More</span>
        <span v-else>Less</span>
      </a>
      <p>~ Author ~</p>
      <div class="icon-container">
        <a href="#">
          <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x twitter-icon" />
        </a>
      </div>
      <!-- <div class="under-card" :class="theme + '-pink'"></div> -->
    </div>
  </div>
</template>

<script>

export default {
  props: ['index'],
  data() {
    return {
      expand: false,
    }
  },
  methods: {
    expandCard() {
      if(!this.expand) {
        this.$store.dispatch('setCardIndex', this.index);
        this.expand = true;
      }
      else {
        this.expand = false;
        this.$store.dispatch('setCardIndex', null);
      }
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
    pink() {
      if (!this.theme) {
        return;
      }
      return this.theme + '-pink';
    },
    orange() {
      if (!this.theme) {
        return;
      }
      return this.theme + '-orange';
    },
    yellow() {
      if (!this.theme) {
        return;
      }
      return this.theme + '-yellow';
    },
    green() {
      if (!this.theme) {
        return;
      }
      return this.theme + '-green';
    },
    blue() {
      if (!this.theme) {
        return;
      }
      return this.theme + '-blue';
    },
    cardIndex() {
      return this.$store.getters.getCardIndex;
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/base.scss";

.card {
  position: relative;
  margin-bottom: 3rem;
  width: 20rem;
  margin-bottom: 3rem;
  margin: 2rem 3rem;

  &.grow {
    animation: grow 1s forwards;
  }

  &.shrink {
    animation: shrink 1s forwards;
  }

  &.hide {
    display: none;
  }
}

.primary-card {
  box-shadow: -1px 2px 5px #0000004f;
  border-radius: 10%;
  padding: 1rem;
  position: relative;
  background-color: white;
  margin: 0 auto;
  width: 100%;
}

.under-card {
  position: absolute;
  border-radius: 10%;
  top: -1rem;
  height: 100%;
  width: 100%;
  right: -3rem;

  &.light-pink {
    background-color: $light-pink;
  }
  &.dark-pink {
    background-color: $dark-pink;
  }
  &.light-orange {
    background-color: $light-orange;
  }
  &.dark-orange {
    background-color: $dark-orange;
  }
  &.light-yellow {
    background-color: $light-yellow;
  }
  &.dark-yellow {
    background-color: $dark-yellow;
  }
  &.light-green {
    background-color: $light-green;
  }
  &.dark-green {
    background-color: $dark-green;
  }
  &.light-blue {
    background-color: $light-blue;
  }
  &.dark-blue {
    background-color: $dark-blue;
  }
}
.quote-icon {
  width: 2rem;

  &.light-pink {
    color: $light-pink;
  }
  &.dark-pink {
    color: $dark-pink;
  }
  &.light-orange {
    color: $light-orange;
  }
  &.dark-orange {
    color: $dark-orange;
  }
  &.light-yellow {
    color: $light-yellow;
  }
  &.dark-yellow {
    color: $dark-yellow;
  }
  &.light-green {
    color: $light-green;
  }
  &.dark-green {
    color: $dark-green;
  }
  &.light-blue {
    color: $light-blue;
  }
  &.dark-blue {
    color: $dark-blue;
  }
}

.icon-container {
  display: flex;
  justify-content: flex-end;
}

.twitter-icon {
  color: #55acee;
}

.twitter-icon:hover {
  cursor: pointer;
  /* position: absolute;
  right: 1rem; */
}

a.show-more {
  display: block;
}

@media (min-width: 768px) {
  .quote-icon {
    width: 3rem;
  }
}

@keyframes grow {
  0% {
    width: 20rem;
  }
  100% {
    width: 80%;
  }
}

@keyframes shrink {
  0% {
    width: 80%;
  }
  100% {
    width: 20rem;
  }
}
</style>
