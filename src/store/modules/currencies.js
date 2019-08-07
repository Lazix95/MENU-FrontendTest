const state = {
  currencies: [
    {
      id: "1",
      iso: "USD",
      symbol: "$"
    },
    {
      id: "2",
      iso: "EUR",
      symbol: "e"
    }
  ]
}

const getters = {
  getCurrencies: state => state.currencies,
  getCurrency: state => id => state.currencies.find(el => el.id === id),
  filter: state => keyword => {
    const currenciesToReturn = state.currencies.filter(el => 
      (el.id == keyword) || (el.iso.toLowerCase().includes(keyword) || el.symbol.toLowerCase().includes(keyword)))
    return currenciesToReturn
  }
}

const mutations = {
  addNewCurrency: (state, payload) => {
    state.currencies = [...state.currencies, payload]
  },
  updateEditedCurrency: (state, payload) => {
    state.currencies = state.currencies.map(currency => currency.id === payload.id ? (currency = payload) : currency)
  },
  deleteCurrency: (state, id) => {
    state.currencies = state.currencies.filter(currency => currency.id !== id)
  }
}

const actions = {
  addCurrency: ({ state, commit }, payload) => {
    const newCurrency = {
      id: state.currencies.length,
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