const state = {
  currencies: []
}

const getters = {
  getCurrencies: state => state.currencies,
  getCurrency: state => id => state.currencies.find(el => el.id == id),
  filter: state => keyword => {
    const currenciesToReturn = state.currencies.filter(el =>
      (el.id == keyword) || (el.iso.toLowerCase().includes(keyword) || el.symbol.toLowerCase().includes(keyword)))
    return currenciesToReturn
  }
}

const mutations = {
  addNewCurrency: (state, payload) => {
    state.currencies = [...state.currencies, payload]
    sessionStorage.setItem('currencies', JSON.stringify(state.currencies))
  },
  updateEditedCurrency: (state, payload) => {
    state.currencies = state.currencies.map(currency => currency.id === payload.id ? (currency = payload) : currency)
    sessionStorage.setItem('currencies', JSON.stringify(state.currencies))
  },
  deleteCurrency: (state, id) => {
    state.currencies = state.currencies.filter(currency => currency.id !== id)
    sessionStorage.setItem('currencies', JSON.stringify(state.currencies))
  },
  loadCurrencies: (state) => {
    let currencies = sessionStorage.getItem('currencies')
    if (currencies) {
      currencies = JSON.parse(currencies)
      state.currencies = currencies
    }
  }
}

const actions = {
  addCurrency: ({ state, commit }, payload) => {
    // Currency with highest ID is always on the bottom of the array
    const newId = state.currencies.length > 0 ? parseInt(state.currencies[state.currencies.length - 1].id) + 1 : 0;
    const newCurrency = {
      id: newId,
      iso: payload.code,
      symbol: payload.symbol
    }
    commit('addNewCurrency', newCurrency)
  },
  editCurrency: ({ commit }, payload) => {
    const editedCurrency = {
      id: payload.id,
      iso: payload.code,
      symbol: payload.symbol
    }
    commit('updateEditedCurrency', editedCurrency)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}