<template>
  <div class="addCurrency">
    <CurrenciesTopBar></CurrenciesTopBar>
    <div class="container mainContent">
      <p class="pageTitle">Edit Currency</p>
      <CurrenciesForm
        :currencies="getCurrencies"
        :itemToEdit="itemToEdit"
        @submit="onSubmit($event)"
      ></CurrenciesForm>
    </div>
  </div>
</template>

<script>
import CurrenciesTopBar from "../components/Currencies/CurrenciesTopBar";
import CurrenciesForm from "../components/Currencies/CurrenciesForm";
import { mapGetters, mapActions } from "vuex";
import { async } from "q";
export default {
  name: "EditCurrency",
  computed: {
    ...mapGetters(["getCurrency", "getCurrencies"]),
    itemToEdit: function() {
      const currId = this.$route.params.id
      const elem = this.getCurrency(currId);
      return elem;
    }
  },
  methods: {
    ...mapActions(["editCurrency"]),
    onSubmit: function(evt) {
      this.editCurrency(evt);
      this.$router.push("/");
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
  .pageTitle {
    color: $primary;
    border-bottom: 1px solid $primary;
    margin-top: 20px;
    padding-bottom: 5px;
  }
}
</style>