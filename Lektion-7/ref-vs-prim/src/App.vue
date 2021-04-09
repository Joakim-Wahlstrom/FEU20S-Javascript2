<template>
  <div id="app">
    <Navbar :title="title" @changeTitle="change($event)" />
    <div class="container">
      <Users :users="users" />
      <Users2 :users="users" />
    </div>
    <Footer :title="title" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Users from './components/Users'
import Users2 from './components/Users2'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Users,
    Users2
  },
  data() {
    return {
      title: 'FRONTEND2021',
      users: [
        {id:1, name: 'Joakim', age: 34, email: 'joakim@mail.com'},
        {id:2, name: 'Jeanette', age: 33, email: 'jeanette@mail.com'},
        {id:3, name: 'Hans', age: 36, email: 'hans@mail.com'},
        {id:4, name: 'Tommy', age: 38, email: 'tommy@mail.com'}
      ]
    }
  },
  methods: {
    change(newTitle) {
      this.title = newTitle
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
  min-height: 300px;
}
</style>
