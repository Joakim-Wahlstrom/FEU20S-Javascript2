<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-2 g-4">

      <Display :name="name" :age="age" :email="email" />
      <Update :name="name" :age="age" :email="email" @update-user="update" />
      <!-- <Display :user="user" />
      <Update :user="user" /> -->

    </div>
  </div>
</template>

<script>
import Update from './components/Update'
import Display from './components/Display'

export default {
  name: 'App',
  components: {
    Update,
    Display
  },
  data() {
    return {
      name: 'Joakim',
      age: '33',
      email: 'joakim@mail.com',
      user: {
        name: 'Joakim',
        age: '33',
        email: 'joakim@mail.com'
      }
    }
  },
  methods: {
    update(newName, newAge, newEmail) {
      // console.log(newName, newAge, newEmail)
      this.name = newName
      this.age = newAge
      this.email = newEmail
    }
  }
}
</script>

<style>

</style>
