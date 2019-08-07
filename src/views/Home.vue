<template>
  <div class="home">
   <CurrenciesTopBar></CurrenciesTopBar>
  </div>
</template>

<style  lang="scss">
@import "@/scss/_variables.scss";

.home {
  color: $background;
  height: 100%;
}
</style>


<script>
import CurrenciesTopBar from "./../components/CurrenciesTopBar";
export default {
  name: "home",
  components: {
    CurrenciesTopBar
  }
};
</script>
