<script>
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
      cards: null,
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=10&offset=0',
    }
  },
  methods: {
    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.cards = response.data.data;
          console.log(this.cards);
        })
    }
  },
  mounted() {
    this.callApi(this.API_URL);
  }
}
</script>

<template>
  <SiteHeader></SiteHeader>

  <SiteMain></SiteMain>

  <div class="container">
    <div class="row">
      <div class="card" v-for="card in cards">
        <div class="card_image">
          <img :src="card.card_images[0].image_url" :alt="card.name">
        </div>
        <h4> {{ card.name }} </h4>
        <div> {{ card.type }} </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use './partials/varibles.scss' as *;
</style>