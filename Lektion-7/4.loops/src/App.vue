<template>
  <div>
    <Names :names="names" />
    <Loop :names="names" />
    <Users :users="users" />
    <Objects :users="users" />
  </div>
</template>

<script>
import Names from './components/Names'
import Loop from './components/Loop'
import Users from './components/Users'
import Objects from './components/Objects'

export default {
  name: 'App',
  components: {
    Names,
    Loop,
    Users,
    Objects
  },
  data() {
    return {
      names: ['Joakim', 'Jeanette', 'Hans', 'Tommy', 'Haitem', 'Ida', 'Joakim'],
      users: [
        {id: 1, name: 'Joakim', age: 34},
        {id: 2, name: 'Jeanette', age: 34},
        {id: 3, name: 'Hans', age: 36}
      ]
    }
  }
}
</script>

<style>

</style>
