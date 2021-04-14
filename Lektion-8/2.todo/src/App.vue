<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      todos: [
        { id: '1', title: 'Todo Item One', completed: true },
        { id: '2', title: 'Todo Item Two', completed: false },
        { id: '3', title: 'Todo Item Three', completed: false },
        { id: '4', title: 'Todo Item Four', completed: false },
        { id: '5', title: 'Todo Item Five', completed: false }
      ]
    }
  }
}
</script>

<style>

</style>
