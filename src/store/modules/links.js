import axios from 'axios'

const state = {
  links: {
    id1: {
      title: 'Home',
      caption: 'Stop the Crime Home page',
      link: 'http://www.stopthecrime.net'
    }
  }
}

const getters = {
  allLinks: (state) => state.links
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
};
