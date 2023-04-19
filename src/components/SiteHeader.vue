<script>
import axios from 'axios';
import { state } from '../state.js';
export default {
  name: 'SiteHeader',
  data() {
    return {
      state,
      archetypes: null,
      archetype: '',
    }
  },
  methods: {
    filterCard(){
      let url;
      if (this.archetype === '') {
        url = state.API_URL
      } else {
        url = `${state.API_URL}&archetype=${this.archetype}`
      }
      state.fetchCards(url)
    }
  },
  mounted(){
    axios
    .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
    .then(resp => {
      this.archetypes = resp.data
      console.log(this.archetypes);
    })
  }

}
</script>

<template>
  <header>
    <div class="container">
      <div class="left_header">
        <div class="logo_container">
          <img src="/img/ygologo.png" alt="">
        </div>
      </div>
      <div class="right_header">
        <select name="cards" class="cards_selector" v-model="archetypes" @change="filterCard">
          <option value="">Select Archetype</option>
          <option  v-for="arch in archetypes" :value="arch.archetype_name">{{ arch.archetype_name }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../partials/varibles.scss' as *;

header {
  .container {
    margin: auto;
  }

  .logo_container {
    width: 120px;
    height: 80px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .cards_selector {
    padding: 0.5rem;
    background-color: $white;
    border: none;
    border-radius: 0.5rem;
    color: $red;
    margin: 0.5rem;
  }

  .cards_selector_search {
    padding: 0.5rem;
    background-color: $red;
    border: none;
    border-radius: 0.5rem;
    color: $white;
    margin: 0.5rem;
  }
}
</style>