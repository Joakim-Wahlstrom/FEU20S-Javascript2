<template>
  <div>
    <div v-if="product" class="card">
      <h1>{{ product.name }}</h1>
      <p>id: {{ product.id }}</p>
      <h3>Price: {{ product.price }}</h3>
      <h3>Price + tax {{ product.taxPrice }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  methods: {
    ...mapActions(['getProduct'])
  },
  created() {
    this.getProduct(this.id)
  },
  computed: {
    ...mapGetters(['product'])
  }
}
</script>

<style scoped>
  .card {
    width: 80%;
    margin: 2rem auto;
    border: 1px solid #4b4b4b;
    border-radius: 10px;
    padding: 1rem;
    min-height: 50vh;
  }
</style>