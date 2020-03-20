<template>
  <div class="card">
    <font-awesome-icon
      icon="quote-left"
      class="fa-2x quote-icon"
      :class="{blue: index % 5 === 0, green: index % 4 === 0,  yellow: index % 3 === 0, orange: index % 2 === 0, pink: index % 1 === 0 }"
    />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
    <font-awesome-icon
      icon="quote-right"
      class="fa-2x quote-icon"
      :class="{blue: index % 5 === 0, green: index % 4 === 0,  yellow: index % 3 === 0, orange: index % 2 === 0, pink: index % 1 === 0 }"
    />
    <p>~ Author ~</p>
    <div class="icon-container">
      <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x twitter-icon" />
    </div>

    <div
      class="under-card"
      :class="{blue: index % 5 === 0, green: index % 4 === 0,  yellow: index % 3 === 0, orange: index % 2 === 0, pink: index % 1 === 0 }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['index']
}
</script>

<style lang="scss">
@import "../../assets/base.scss";

.card {
  box-shadow: -1px 2px 5px #0000004f;
  border-radius: 10%;
  padding: 1rem;
  position: relative;
  background-color: white;
  max-width: 20rem;
  margin: 0 auto;
}

.under-card {
  position: absolute;
  background-color: $light-pink;
  border-radius: 10%;
  top: -1rem;
  height: 100%;
  width: 100%;
  left: 1rem;
  z-index: -1;

  &.pink {
    background-color: $light-pink;
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

  &.pink {
    color: $light-pink;
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

.twitter-icon {
  color: #55acee;
}

.twitter-icon:hover {
  cursor: pointer;
  /* position: absolute;
  right: 1rem; */
}

@media (min-width: 768px) {
  .quote-icon {
    width: 3rem;
  }
}
</style>
