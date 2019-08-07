<template>
  <b-row no-gutters class="mainLayout">
    <b-col xl="4" lg="5" md="6" class="pa-0">
      <CurrencyList></CurrencyList>
    </b-col>
    <b-col xl="8" lg="7" md="6">
      <router-view />
    </b-col>
  </b-row>
</template>

<style lang="scss">
@import "./App.scss";

.mainLayout {
  height: 100%;
}
</style>

<script>
import CurrencyList from "./components/CurrencyList";
export default {
  components: {
    CurrencyList
  }
};
</script>

