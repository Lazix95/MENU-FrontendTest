<template>
  <div class="addCurrency">
    <CurrenciesTopBar></CurrenciesTopBar>
    <div class="container mainContent">
      <p class="pageTitle">Add Curreny</p>
      <CurrenciesForm :currencies="getCurrencies" @submit="onSubmit($event)"></CurrenciesForm>
    </div>
  </div>
</template>

<script>
import CurrenciesTopBar from "./../components/CurrenciesTopBar";
import CurrenciesForm from "./../components/CurrenciesForm";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AccCurrency",
  computed: {
    ...mapGetters(["getCurrencies"])
  },
  methods: {
    ...mapActions(["addCurrency"]),
    onSubmit: function(evt) {
      this.addCurrency(evt);
      this.$router.push('/')
    }
  },
  components: {
    CurrenciesTopBar,
    CurrenciesForm
  }
};
</script>

<style  lang="scss">
@import "@/scss/_variables.scss";

.addCurrency {
  background: $background;
  height: 100%;
  width: 100%;
  .pageTitle {
    color: $primary;
    border-bottom: 1px solid $primary;
    margin-top: 20px;
    padding-bottom: 5px;
  }
}
</style>