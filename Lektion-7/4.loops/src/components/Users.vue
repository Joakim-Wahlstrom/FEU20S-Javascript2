<template>
  <div v-if="users.length">
    <User v-for="user in users" :key="user.id" :user="user" />
  </div>
  <div v-else>
    <h3>No Users registrated</h3>
  </div>
</template>

<script>
import User from './User'
export default {
  props: ['users'],
  components: {
    User
  }
}
</script>

<style>

</style>