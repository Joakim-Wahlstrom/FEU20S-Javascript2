<template>
  <div class="bg-light">
    <Navbar />
    <AddTodo @addTodo="add" @sort="sortTodos" />
    <div class="container">
      <TodoList :value="sort" :todos="todos" @toggle="fetchTodos" @delete-todo="deleteTodo" />
      <!-- <TodoList :value="sort" :todos="sortedTodos" @toggle="fetchTodos" @delete-todo="deleteTodo" /> -->
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
      todos: [],
      sort: ''
    }
  },
  computed: {
    sortedTodos() {
      switch(this.sort) {
        case 'false':
          return this.todos.filter(todo => !todo.completed)
        case 'true':
          return this.todos.filter(todo => todo.completed)
        default:
          return this.todos
      }
    }
  },
  methods: {
    sortTodos(val) {
      switch(val) {
        case 'false':
          this.sort = false
          break;
        case 'true':
          this.sort = true
          break
        default:
          this.sort = ''
      }
      // this.sort = val
    },
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
