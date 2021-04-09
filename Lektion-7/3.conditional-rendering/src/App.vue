<template>
  <div>
    <Navbar :active="active" />
    <div class="container">
      <h1 v-if="name === 'Joakim'" >Hej {{ name }} välkommen tillbaka</h1>
      <h1 v-else >Trevligt att träffas {{ name }}</h1>

      <Form />
      <Todos :todos="todos" />

    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Form from './components/Form'
import Todos from './components/Todos'
export default {
  name: 'App',
  components: {
    Navbar,
    Form,
    Todos
  },
  data() {
    return {
      name: 'Jeanette',
      active: false,
      todos: [
        {id: 1, title: 'Todo item 1'},
        {id: 2, title: 'Todo item 2'},
        {id: 3, title: 'Todo item 3'}
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
</style>
