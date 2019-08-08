<template>
  <b-form @submit.prevent="onSubmit()">
    <b-row class="codeInputRow">
      <b-col class="labelCol" align-self="start">Currency Code</b-col>
      <b-col class="inputCol" align-self="end">
        <b-form-group>
          <b-form-input :state="errors.codeInput.status" v-model="form.code"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">{{errors.codeInput.message}}</b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="symbolInputRow">
      <b-col class="labelCol" align-self="start">Currency Symbol</b-col>
      <b-col class="inputCol" align-self="end">
        <b-form-group>
          <b-form-input v-model="form.symbol" :state="errors.symbolInput.status"></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">{{errors.symbolInput.message}}</b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>

    <b-button class="submitButton" @click="onSubmit()" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
import { validateCode, validateSymbol } from "../../utils/validations";
export default {
  name: "CurrenciesForm",
  data() {
    return {
      form: {
        id: null,
        code: "",
        symbol: ""
      },
      errors: {
        codeInput: {
          status: null,
          message: ""
        },
        symbolInput: {
          status: null,
          message: ""
        }
      }
    };
  },
  props: {
    itemToEdit: {
      type: Object,
      default: null
    },
    currencies: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onSubmit() {
      this.validateForm(() => {
        this.$emit("submit", this.form);
      });
    },
    validateCodeInput() {
      // If status is false, input is not valid
      // If form is in edit mode, pass every Currency item to validation function exept the one thet is edited
      this.form.code = this.form.code.replace(/ /g, "");
      const code = this.form.code;
      const currencies = this.itemToEdit
        ? this.currencies.filter(el => el.id !== this.itemToEdit.id)
        : this.currencies;
      const errors = validateCode(code, currencies);
      this.errors.codeInput = errors;
      return errors.status;
    },
    validateSymbolInput() {
      // If status is false, input is not valid
      this.form.symbol = this.form.symbol.replace(/ /g, "");
      const symbol = this.form.symbol;
      const errors = validateSymbol(symbol);
      this.errors.symbolInput = errors;
      return errors.status;
    },
    validateForm(cb) {
      if (this.validateCodeInput() && this.validateSymbolInput()) {
        cb();
      } else {
        return false;
      }
    },
    populateForm() {
      if (this.itemToEdit) {
      this.form.id = this.itemToEdit.id;
      this.form.code = this.itemToEdit.iso;
      this.form.symbol = this.itemToEdit.symbol;
    }
    }
  },
  watch: {
    itemToEdit: function() {
      this.populateForm()
    }
  },
  mounted() {
    this.populateForm();
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";
@import "@/scss/_mixins.scss";

.symbolInputRow,
.codeInputRow {
  border-bottom: 1px solid #cccccc;
  margin: 0 0 15px 0;
  .labelCol {
    margin-top: 10px;
    color: #666666;
    font-weight: 600;
    padding: 0 20px 0 0;
  }
  .inputCol {
    padding-right: 0;
    input {
      @include inputShadow;
      height: 42px;
      border-radius: 0;
    }
    .is-invalid,
    .invalid-feedback {
      color: $primary;
      border-color: $primary;
    }
  }
}
.submitButton {
  float: right;
  width: 150px;
}
</style>
