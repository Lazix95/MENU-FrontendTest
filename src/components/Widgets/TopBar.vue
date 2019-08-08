<template>
  <div v-bind:class="selectClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  computed: {
    selectClass: function() {
      return this.darken ? "darkenPrimaryBackground" : "primaryBackground";
    }
  },
  props: {
    name: String,
    darken: Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

@mixin topBar {
  height: 60px;
  padding-left: 30px;
  padding-top: 7.5px;
}

.primaryBackground {
  @include topBar;
  background: $primary;
}

.darkenPrimaryBackground {
  @include topBar;
  background: $darkenPrimary;
}
</style>
