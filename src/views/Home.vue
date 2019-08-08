<template>
  <div class="home">
   <CurrenciesTopBar></CurrenciesTopBar>
  </div>
</template>

<script>
import CurrenciesTopBar from "../components/Currencies/CurrenciesTopBar";
export default {
  name: "home",
  components: {
    CurrenciesTopBar
  }
};
</script>

<style  lang="scss">
@import "@/scss/_variables.scss";

.home {
  color: $background;
  height: 100%;
}
</style>
