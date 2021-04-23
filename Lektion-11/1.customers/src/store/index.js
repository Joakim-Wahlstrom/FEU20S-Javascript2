import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/Posts'
import post from './modules/Post'
import Customers from './modules/Customers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    post,
    Customers
  }
})
