<template>
  <div class="currencyList">
    <TopBar class="topBar" darken>
      <img style="height: 45px" src="./../assets/menu.png" alt="menu_logo" />
    </TopBar>

    <div class="container">
      <searchInput @search="filterValue = $event" ></searchInput>
      <p class="list">Currency List</p>
      <Currency v-for="currency in currencies" :item="currency" @delete="deleteCurrency($event)"></Currency>
      <Currency addButton></Currency>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SearchInput from "./SearchInput";
import Currency from "./Currency"
import { mapGetters, mapMutations } from 'vuex'
import { filter } from 'minimatch';
export default {
  name: "CurrencyList",
  data: () => ({
    filterValue: ''
  }),
  computed: {
    ...mapGetters(['getCurrencies', 'filter']),
    currencies: function() {
      const currencies = this.filterValue ? this.filter(this.filterValue) : this.getCurrencies;
      return currencies;
    }
  },
  methods: {
    ...mapMutations(['deleteCurrency'])
  },
  components: {
    TopBar,
    SearchInput,
    Currency
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";

.currencyList {
  background: $darkenBackground;
  height: 100%;

  .topBar {
    margin-bottom: 20px;
  }

  .list {
    color: $darkenPrimary;
    border-bottom: 1px solid $darkenPrimary;
    margin-top: 30px;
    padding-bottom: 10px;
    margin-bottom: 0;
  }
}
</style>
