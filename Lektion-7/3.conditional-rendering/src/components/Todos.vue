<template>
  <div>
    <h2 v-if="todos.length">Yay, det finns saker att göra</h2>
    <h2 v-else>Det finns inga todos, lägg till några vetja!</h2>
  </div>
</template>

<script>
export default {
  props: ['todos']
}
</script>

<style>

</style>