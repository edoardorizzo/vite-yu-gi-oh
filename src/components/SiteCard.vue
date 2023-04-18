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
  height: 340px;
  width: calc(100% / 5);
  margin: 1rem 1rem;
  background-color: $opacity-black;
  color: $white;

  .card_image {
    margin: 1rem 0;

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