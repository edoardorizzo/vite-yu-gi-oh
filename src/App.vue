<script>
import { state } from './state.js';
import axios from 'axios';
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
export default {
  components: {
    SiteHeader,
    SiteMain,
  },
  data() {
    return {
      state
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          state.cards = response.data.data;
          state.meta = response.data.meta;
          console.log(this.cards);
        })
    }
  },
  mounted() {
    this.callApi(state.API_URL);
  }
}
</script>

<template>
  <SiteHeader></SiteHeader>

  <SiteMain></SiteMain>

  <div class="container">
    <div class="row">
      <div class="card" v-for="card in state.cards">
        <div class="card_image">
          <img :src="card.card_images[0].image_url" :alt="card.name">
        </div>
        <div class="card_text">
          <h6> {{ card.name }} </h6>
          <div> {{ card.type }} </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use './partials/varibles.scss' as *;

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