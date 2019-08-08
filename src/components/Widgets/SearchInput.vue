<template>
  <div>
    <b-input-group>
      <b-input-group-text slot="prepend">{{label}}</b-input-group-text>
      <b-form-input @input="emitValue($event)"></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    label: {
      type: String,
      default: 'Search'
    }
  },
  methods: {
    emitValue: function(evt) {
      this.$emit('search', evt.toLowerCase());
    }
  }
};
</script>

<style>
</style>
