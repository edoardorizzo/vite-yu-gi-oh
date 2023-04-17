<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteMain from './components/SiteMain.vue';
export default {
  components: {
    SiteHeader,
    SiteMain,
  }
}
</script>

<template>
  
<SiteHeader></SiteHeader>

<SiteMain></SiteMain>

</template>



<style lang="scss" scoped>
@use './partials/varibles.scss' as *;

main{
  background-color: $white;
  fill-opacity: (50%);
  border-radius: 1rem;
  max-width: 900px;
  margin: auto;
}
</style>