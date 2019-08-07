<template>
  <div>
    <b-input-group>
      <b-input-group-text slot="prepend">Currency</b-input-group-text>
      <b-form-input @input="emitValue($event)"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  methods: {
    emitValue: function(evt) {
      this.$emit('search', evt);
    }
  }
};
</script>

<style>
</style>
