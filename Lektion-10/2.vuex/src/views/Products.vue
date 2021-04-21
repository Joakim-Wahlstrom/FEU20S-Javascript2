<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button @click="comp = 'Grid'"><i class="fas fa-th-large"></i></button>
        <button @click="comp = 'List'"><i class="fas fa-list"></i></button>
      </div>
      <br>
      <form>
        <div>
          <input type="text" placeholder="Search..." v-model="searchVal" @keyup="search(searchVal)">
        </div>
        <br>
        <div>
          <a href="#">Filter</a>
        </div>
      </form>
    </aside>

    <div class="content">
      <component :is="comp" />
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Grid from '../components/products/Grid'
import List from '../components/products/List'
export default {
  components: {
    Grid,
    List
  },
  data() {
    return {
      comp: 'List',
      searchVal: ''
    }
  },
  methods: {
    ...mapActions(['search'])
  }
}
</script>

<style scoped>
  .products {
    display: flex;
  }
  aside {
    flex: 2;
    background: #424242;
    padding: 2rem;
    min-height: calc(100vh - 66.29px);
  }
  .content {
    flex: 10;
  }
  .buttons button {
    padding: 0.2rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
</style>