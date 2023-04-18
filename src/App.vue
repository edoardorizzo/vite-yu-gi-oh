<script>
import { state } from './state.js';

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
    
  },
}
</script>

<template>
  <SiteHeader></SiteHeader>

  <SiteMain></SiteMain>
</template>



<style lang="scss" scoped>
@use './partials/varibles.scss' as *;

</style>