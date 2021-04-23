
export default {
  state: {
    customers: [
      { name: "Customer 1", active: true },
      { name: "Customer 2", active: false },
      { name: "Customer 3", active: true },
    ]
  },
  getters: {
    customers: state => state.customers
  },
  mutations: {},
  actions: {}
}