<template>
  <TopBar>
      <span class="title">
        <img class="euroSign" src="./../assets/eurosign.png" />
      </span>
      <span class="title text">Currencies</span>
    </TopBar>
</template>

<script>
import TopBar from './TopBar'
export default {
 name: 'CurrenciesTopBar',
 components: {
   TopBar
 }
}
</script>

<style lang="scss" scoped>
.title {
    margin-top: 8px;
    color: #ffffff;
    float: left;
    &.text{
      margin-top: 11px;
    }
    .euroSign {
      height: 25px;
      margin-right: 8px;
    }
}
</style>