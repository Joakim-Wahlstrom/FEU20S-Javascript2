<template>
  <div class="bg-light">
    <Navbar />
    <AddTodo @addTodo="add" />
    <div class="container">
      <TodoList :todos="todos" @toggle="fetchTodos" @delete-todo="deleteTodo" />
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
    },
    add(title) {
      fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          title,
          completed: false
        })
      })
      .then(res => {
        // console.log(res)
        if(res.ok)
          this.fetchTodos()
      })
    },
    deleteTodo(id) {
      fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
      })
      .then(res => {
        if(res.ok)
          this.fetchTodos()
      })
    }
  },
  created() {
    this.fetchTodos()
    
  }
}
</script>

<style>

</style>
