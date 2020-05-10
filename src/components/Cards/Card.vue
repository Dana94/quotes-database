<template>
  <div class="card" :class="{
      dark: theme === 'dark',
      single: singleQuote
    }">
    <div
      class="under-card"
      :class="{
        blue: id % 5 === 0,
        green: id % 4 === 0,
        yellow: id % 3 === 0,
        purple: id % 3 === 0,
        orange: id % 2 === 0,
        pink: id % 2 === 0,
        red: id < 2 || id % 1 === 0
      }"
    ></div>
    <div class="primary-card">
      <font-awesome-icon
        icon="quote-left"
        class="fa-2x quote-icon"
        :class="{
          blue: id % 5 === 0,
          green: id % 4 === 0,
          yellow: id % 3 === 0,
          purple: id % 3 === 0,
          orange: id % 2 === 0,
          pink: id % 2 === 0,
          red: id < 2 || id % 1 === 0
        }"
      />
      <!-- desktop -->
      <template v-if="!inMobile">
        <!-- all quotes show -->
        <blockquote>
          <p>{{quote.quote}}</p>
        </blockquote>
      </template>

      <!-- mobile -->
      <template v-else>
        <blockquote v-if="!longQuote">
          <p>{{quote.quote}}</p>
        </blockquote>
        <!-- longer quotes have "show more" option -->
        <p v-else>
          <template v-if="showFullQuote">
            <blockquote>
              <p>{{quote.quote}}</p>
            </blockquote>
          </template>
          <template v-else>{{shortenQuote}}...</template>
          <a class="show-more" @click="showFullQuote = !showFullQuote">
            show
            <span v-if="!showFullQuote">more</span>
            <span v-else>less</span>
          </a>
        </p>
      </template>
      <font-awesome-icon
        icon="quote-right"
        class="fa-2x quote-icon"
        :class="{
          blue: id % 5 === 0,
          green: id % 4 === 0,
          yellow: id % 3 === 0,
          purple: id % 3 === 0,
          orange: id % 2 === 0,
          pink: id % 2 === 0,
          red: id < 2 || id % 1 === 0
        }"
      />
      <footer role="contentinfo">
        <p>~ {{quote.author.name}} ~</p>
        <p>{{quote.author.description}}</p>
        <div class="icon-container">
          <a :href="twitterLink" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x icon-blue" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    id: Number,
    quote: Object,
    singleQuote: {
      default: false
    }
  },
  data() {
    return {
      showFullQuote: false
    }
  },
  computed: {
    theme() {
      return this.$store.getters.getTheme;
    },
    longQuote() {
      return this.quote.quote.length > 100; // 260; TODO: change back
    },
    twitterLink() {
      return 'https://twitter.com/intent/tweet?text="' + encodeURI(this.quote.quote) + '" -' + encodeURI(this.quote.author.name);
    },
    // cut off longer quotes until "show more" is clicked
    shortenQuote() {
      return this.quote.quote.substring(0, 100);
    },
    inMobile() {
      return window.innerWidth < 768
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/base.scss";

.fa-arrow-left {
  position: absolute;
  left: 0;
  top: -4rem;
}

.fa-arrow-right {
  position: absolute;
  right: 0;
  top: -4rem;
}

.card {
  position: relative;
  // width: 20rem;
  margin: 2rem 3rem;
  letter-spacing: 1px;

  font-family: "Baloo Thambi 2", cursive;
  font-size: 1.2rem;

  &.single {
    width: 100%;
    margin: 0;
  }

  &.hide {
    display: none;
  }

  // changes in dark theme
  &.dark {
    color: $dark-card-text;

    .primary-card {
      background-color: $dark-card;

      .quote-icon {
        &.red {
          color: $dark-red;
        }
        &.green {
          color: $dark-green;
        }
        &.blue {
          color: $dark-blue;
        }
        &.pink {
          color: $dark-pink;
        }
        &.purple {
          color: $dark-purple;
        }
      }
    }

    .under-card {
      &.red {
        background-color: $dark-red;
      }
      &.green {
        background-color: $dark-green;
      }
      &.blue {
        background-color: $dark-blue;
      }
      &.pink {
        background-color: $dark-pink;
      }
      &.purple {
        background-color: $dark-purple;
      }
    }

    a.show-more {
      background-color: $light-bg;
      color: $dark-bg;
    }
  }
}

.primary-card {
  box-shadow: -1px 2px 5px #0000004f;
  border-radius: 10%;
  padding: 1rem;
  position: relative;
  background-color: $light-card;
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

  &.red {
    background-color: $light-red;
  }
  &.orange {
    background-color: $light-orange;
  }
  &.yellow {
    background-color: $light-yellow;
  }
  &.green {
    background-color: $light-green;
  }
  &.blue {
    background-color: $light-blue;
  }
}

.quote-icon {
  width: 2rem;

  &.red {
    color: $light-red;
  }
  &.orange {
    color: $light-orange;
  }
  &.yellow {
    color: $light-yellow;
  }
  &.green {
    color: $light-green;
  }
  &.blue {
    color: $light-blue;
  }
}

.icon-container {
  display: flex;
  justify-content: flex-end;
}

.icon-blue {
  color: #55acee;

  &:hover {
    cursor: pointer;
  }
}

a.show-more {
  display: block;
  margin: 1rem auto;
  background-color: $dark-bg;
  color: white;
  width: max-content;
  padding: 0.5rem;
  border-radius: 10%;
  &:hover {
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .quote-icon {
    width: 3rem;
  }
  .card {
    max-width: 50%;
  }
}
</style>
