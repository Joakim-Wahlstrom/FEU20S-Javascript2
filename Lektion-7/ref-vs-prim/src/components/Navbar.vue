<template>
  <nav>
    <h1 @click="change">{{title}}</h1>
  </nav>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    change() {
      // this.title = 'Hej'
      this.$emit('changeTitle', 'Hej')
    }
  }
}
</script>

<style scoped>
  nav {
    background: slategray;
    padding: 2rem;
  }
</style>