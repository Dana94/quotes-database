<template>
  <div>
    <p>Sorry, things are down at the moment.</p>
    <p>Check back next time!</p>
  </div>
</template>

<script>
export default {
    name: "Error"
}
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

p {
    font-family: $body-font-family;
    font-size: 1.5rem;
}
</style>
