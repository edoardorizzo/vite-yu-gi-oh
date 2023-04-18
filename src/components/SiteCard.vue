<script>
export default {
  name: 'SiteCard',
  props: ['card'],
  data() {
    return {

    }
  },
}
</script>

<template>
  <div class="card">
    <div class="card_image">
      <img :src="card.card_images[0].image_url" :alt="card.name">
    </div>
    <div class="card_text">
      <h6> {{ card.name }} </h6>
      <div> {{ card.type }} </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../partials/varibles.scss' as *;

.container {
  margin: auto;

  .row {
    justify-content: space-between;
  }
}

.card {
  width: calc(100% / 6);
  margin: 1rem 1rem;
  padding: 0.5rem;
  background-color: $opacity-black;
  color: $white;

  .card_image {
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      display: block;
    }
  }

  h6 {
    font-size: 16px;
    font-weight: bold;
  }

  div {
    font-size: 14px;
  }
}
</style>