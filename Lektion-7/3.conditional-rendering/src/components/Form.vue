<template>
  <div class="form">
    <label for="name">Name: </label>
    <input type="text" id="name">
    <button @click="error = !error">Toggle Error</button>
    <button @click="success = !success">Toggle Success</button>
    <!-- <p v-if="error">Nånting blev fel</p>
    <p v-else-if="success">Jippie det fungerar</p> -->

    <p v-show="error">Nånting blev fel</p>
    <p v-show="success">Jippie det fungerar</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      success: false
    }
  }
}
</script>

<style>
.form {
  margin-top: 2rem;
}
</style>