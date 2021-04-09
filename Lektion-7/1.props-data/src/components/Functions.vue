<template>
  <div>
    <!-- <button v-on:click="sum++">Add</button>
    <button @click="sum--">Subtract</button> -->
    <!-- <button v-on:click="add()">Add</button>
    <button @click="sub">Subtract</button> -->
    <button v-on:click="math(5)">Add</button>
    <button @click="math(-5)">Subtract</button>
    <div>{{ sum }}</div>
  </div>
</template>

<script>
export default {
  name: 'Functions',
  data() {
    return {
      sum: 32
    }
  },
  methods: {
    add() {
      this.sum++
    },
    sub() {
      this.sum--
    },
    math(nr) {
      this.sum += nr
      console.log(this)
      this.sub()
    }
  }
}
</script>

<style>

</style>