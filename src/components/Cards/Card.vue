<template>
  <div class="card">
    <font-awesome-icon icon="quote-left" class="fa-2x"/>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
    <font-awesome-icon icon="quote-right" class="fa-2x"/>
    <p>~ Author ~</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  border: 1px solid black;
  box-shadow: 10px -10px 0 black;
  border-radius: 10%;
  padding: 1rem;
}
.quote-icon {
  width: 2rem;
}

@media (min-width: 768px) {
  .quote-icon {
    width: 3rem;
  }
}
</style>
