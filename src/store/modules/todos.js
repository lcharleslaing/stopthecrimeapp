import axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  async getTodos({ commit }){
    const response = await axios.get('http://localhost:1337/todos')

    commit('setTodos', response.data)
  }
}

const mutations = {
  setTodos: (state, todos) => (state.todos = todos)
}

export default {
  state,
  getters,
  actions,
  mutations
};
