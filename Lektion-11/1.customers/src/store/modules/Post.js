import axios from 'axios'

export default {
  state: {
    post: null
  },
  getters: {
    post: state => state.post
  },
  mutations: {
    SET_POST: (state, post) => {
      state.post = post
    },
    CLEANUP: state => {
      state.post = null
    }
  },
  actions: {
    getPost: async ({commit}, id) => {
      const res = await axios.get('http://localhost:3000/posts/' + id)
      setTimeout(() => {
        commit('SET_POST', res.data)

      }, 1000)
    },
    cleanup: ({commit}) => {
      commit('CLEANUP')
    }
  }
}

