<template>
  <div>
    <div v-for="user in users" :key="user.id">

      <div v-for="(value, key, index) in user" :key="index">
        <p>{{ key }} - {{ value }}</p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style>

</style>