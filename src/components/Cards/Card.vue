<template>
  <div class="card">
    <font-awesome-icon icon="quote-left" class="fa-2x quote-icon" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    </p>
    <font-awesome-icon icon="quote-right" class="fa-2x quote-icon" />
    <p>~ Author ~</p>
    <div class="icon-container">
      <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x twitter-icon" />
    </div>

    <div class="under-card"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/base.scss';

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
}
.quote-icon {
  width: 2rem;
  color: $light-pink;
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
