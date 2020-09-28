import Vue from 'vue'
import Vuex from 'vuex'


import articles from './modules/articles'
import todos from './modules/todos'
import links from './modules/links'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  modules: {
    articles,
    todos,
    links
  }
})
