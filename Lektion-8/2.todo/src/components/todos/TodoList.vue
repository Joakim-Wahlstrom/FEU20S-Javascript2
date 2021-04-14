<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" @toggle="$emit('toggle')" @delete-todo="$emit('delete-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
  props: ['todos'],
  components: {
    Todo
  }
}
</script>

<style>

</style>