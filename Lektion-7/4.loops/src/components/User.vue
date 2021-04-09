<template>
  <div class="user" v-if="user">
    <h3>{{ user.name }}</h3>
    <p>{{ user.age }}</p>
  </div> 
</template>

<script>
export default {
  props: ['user']
}
</script>

<style>
  .user {
    border: 1px solid #333;
    padding: 1rem;
  }
</style>