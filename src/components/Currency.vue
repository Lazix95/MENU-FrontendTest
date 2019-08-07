<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
    <p v-if="addButton" @click="goToAddPage" class="currency addButton">
    <span class="plus">&#10010;</span> ADD CURRENCY
  </p>
  <p v-else @click="goToEditPage" class="currency">{{item.iso}} <span v-if="hover" class="delete">Delete</span></p>
  </div>
</template>

<script>
export default {
  name: "Currency",
  data: () => ({
    hover: false
  }),
  props: {
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    addButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goToAddPage: function() {
      this.$router.push('/currencies/add')
    },
    goToEditPage: function() {
      this.$router.push(`/currencies/edit/${this.item.id}`)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../scss/_variables.scss";
.currency {
  border-bottom: 2px solid #cccccc;
  padding: 1rem 0;
  margin: 0;
  color: #666666;
  cursor: pointer;
  .delete {
    float: right;
    color: #666666;
  }
  &.addButton {
    color: $darkenPrimary;
    cursor: pointer;
    .plus {
      padding: 0 4px;
      border: 1px solid;
      border-radius: 999999px;
      margin-right: 5px;
    }
  }
}
.currency:hover {
  color: #999999;
}
</style>
