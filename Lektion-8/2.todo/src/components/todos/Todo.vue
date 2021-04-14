<template>
  <div class="p-2 border bg-white mt-1">
    <div class="d-flex justify-content-between align-items-center">
      <h4 class="p-2 m-0" :class="{done: todo.completed}" >{{todo.title}}</h4>
      <button class="btn btn-danger px-3">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
  h4 {
    cursor: pointer;
    flex: 1;
  }
  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>