import Vue from 'vue'
import Vuex from 'vuex'
import { products } from './data/products.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products,
    addedToCart: []
  },
  getters: {
  },
  mutations: {
    addToCart(state, id) {
      return state.addedToCart.push(id)
    }
  },
  actions: {

  }
})
