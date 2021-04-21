<template>
  <div>
    <button class="btn" @click="addToPrice(5)">ADD</button>
    <button class="btn" @click="subAsync(5)">SUB</button>
    <div class="grid">
      <!-- <ProductCard v-for="product in products" :key="product.id" class="card" :product="product" /> -->
      <ProductCard v-for="product in filteredProducts" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ProductCard
  },
  methods: {
    ...mapActions(['subAsync', 'addToPrice'])
  },
  computed: {
    ...mapGetters(['products', 'filteredProducts'])
  }
}
</script>

<style scoped>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .card {
    background: #005c50;
  }
</style>