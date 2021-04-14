<template>
  <div class="col">
    <div class="card">
      <div class="card-header bg-primary text-white text-center py-4">
        <h2>{{ name }}</h2>
        <p>Age: {{ age }}</p>
      </div>
      <div class="card-body text-center">
        <p>Email: {{ email }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'email']
  // props: ['user']

}
</script>

<style>

</style>