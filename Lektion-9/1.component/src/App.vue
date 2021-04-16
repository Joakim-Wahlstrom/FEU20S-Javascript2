<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <User />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import User from './components/User'
export default {
  name: 'App',
  components: {
    Navbar,
    User
  }
}
</script>

<style>

</style>
