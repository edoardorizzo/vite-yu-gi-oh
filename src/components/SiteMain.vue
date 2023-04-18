<script>
import SiteCard from './SiteCard.vue';
export default {
  name: 'SiteMain',
  components: {
    SiteCard,
  },
  data() {
    return {
      cards: null,
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=10&offset=0',
    }
  },
}
</script>

<template>
  <SiteCard></SiteCard>
</template>

<style lang="scss" scoped>
@use '../partials/varibles.scss' as *;

main {
  background-color: $opacity-black;
  fill-opacity: (10%);
  border-radius: 0.5rem;
  max-width: 900px;
  margin: auto;
}
</style>