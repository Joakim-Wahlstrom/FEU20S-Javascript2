<template>
  <div>
    <label for="name">Name: </label>
    <input type="text" id="name" :class="hasErrors ? { error: true } : { 'no-error': true }" >
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasErrors: true
    }
  }
}
</script>

<style scoped>
  input {
    padding: 0.5rem 0;
  }
  .error {
    border: 2px solid red;
  }
  .no-error {
    border: 2px solid green;
    outline: green;
  }

</style>