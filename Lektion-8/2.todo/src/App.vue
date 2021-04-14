<template>
  <div class="bg-light">
    <Navbar />
    <AddTodo />
    <div class="container">
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import TodoList from './components/todos/TodoList'
import AddTodo from './components/AddTodo'
export default {
  name: 'App',
  components: {
    Navbar,
    TodoList,
    AddTodo
  },
  data() {
    return {
      // todos: [
      //   { id: '1', title: 'Todo Item One', completed: true },
      //   { id: '2', title: 'Todo Item Two', completed: false },
      //   { id: '3', title: 'Todo Item Three', completed: false },
      //   { id: '4', title: 'Todo Item Four', completed: false },
      //   { id: '5', title: 'Todo Item Five', completed: false }
      // ]
      todos: []
    }
  },
  methods: {
    fetchTodos() {
      fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => {
          this.todos = data
          // console.log(this.todos)
        })
        .catch(err => console.log(err))
    }
  },
  created() {
    this.fetchTodos()
    
  }
}
</script>

<style>

</style>
