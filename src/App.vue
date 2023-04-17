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
          this.card = response.data.data;
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

  <div class="card" v-for=" (card, index) in cards">
    <div class="card_image">
      <img :src="card.data.data[index].card_images[0]" alt="">
    </div>
    <h4> Nome Carta </h4>
    <div> Tipologia </div>
  </div>
</template>



<style lang="scss" scoped>
@use './partials/varibles.scss' as *;
</style>