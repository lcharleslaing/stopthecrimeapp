import axios from 'axios'

const state = {
  articles: []
}

const getters = {
  allArticles: (state) => state.articles
}

const actions = {
  async getArticles({ commit }){
    const response = await axios.get('http://localhost:1337/articles')

    commit('setArticles', response.data)
  }
}

const mutations = {
  setArticles: (state, articles) => (state.articles = articles)
}

export default {
  state,
  getters,
  actions,
  mutations
};
