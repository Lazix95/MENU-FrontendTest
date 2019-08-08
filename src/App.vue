<template>
  <b-row no-gutters class="mainLayout">
    <b-col xl="3" lg="5" md="5" class="pa-0">
      <CurrencyList></CurrencyList>
    </b-col>
    <b-col xl="9" lg="7" md="7">
      <router-view />
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex'
import CurrencyList from "./components/Currencies/CurrencyList";
export default {
  methods: {
    ...mapMutations(['loadCurrencies'])
  },
  mounted() {
    this.loadCurrencies()
  },
  components: {
    CurrencyList
  }
};
</script>

<style lang="scss">
@import "./App.scss";

.mainLayout {
  height: 100%;
}
</style>

