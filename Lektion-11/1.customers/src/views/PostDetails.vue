<template>
  <div v-if="post" class="container mt-5">
    <div class="border rounded p-5">
      <h1 class="text-center border-bottom mb-4 pb-4">{{ post.title }}</h1>
      <p class="text-center">{{ post.body }}</p>
    </div>
  </div>
  <div v-else>
    <h3>Loading...</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPost', 'cleanup'])
  },
  computed: {
    ...mapGetters(['post'])
  },
  created() {
    this.getPost(this.$route.params.id)
  },
  destroyed() {
    this.cleanup()
  }
}
</script>

<style>

</style>