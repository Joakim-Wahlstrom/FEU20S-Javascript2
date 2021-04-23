<template>
  <div>
    <h1 class="text-center mt-5">My Posts</h1>
    <div class="container mt-5">

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPosts'])
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>