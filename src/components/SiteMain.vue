<script>
import { state } from '../state.js';
import SiteCard from './SiteCard.vue';
export default {
  name: 'SiteMain',
  components: {
    SiteCard,
  },
  data() {
    return {
      state
    }
  },
  mounted() {
    this.state.fetchCards(this.state.API_URL);
  },
}
</script>

<template>
  <main>
    <div class="container">
      <h4> Total cards: </h4>
    </div>
    <div class="container">
      <div class="row">
        <SiteCard v-for="card in state.cards" :card="card"></SiteCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../partials/varibles.scss' as *;

main {
.container{
  margin: auto;
}

  h4{
    color: $white;
    background-color: $opacity-black;
    padding: 0.5rem;
    border-radius: 0.5rem;
  }
}

</style>