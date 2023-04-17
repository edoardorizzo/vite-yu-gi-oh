<script>
    export default {
        name: 'SiteHeader',
        data(){
            return{

            }
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
      <select name="cards" id="cards_selector">
        <option value="volvo">Type1</option>
        <option value="saab">Type2</option>
        <option value="mercedes">Type3</option>
        <option value="audi">Type4</option>
      </select>
    </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../partials/varibles.scss' as *;

header {
    .container{
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

  #cards_selector{
    padding: 0.5rem;
    background-color: $red;
    border: none;
    border-radius: 0.5rem;
    color: $white;
  }
}
</style>