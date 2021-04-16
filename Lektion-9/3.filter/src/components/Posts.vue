<template>
  <div>
    <!-- <input type="text" v-model="search" placeholder="Search..." class="form-control my-5"> -->
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="card mb-3 p-4">
        <h2 v-color>{{ post.title | to-upper }}</h2>
        <p>{{ post.body | shorten }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  data() {
    return {
      search: ''
    }
  },
  // computed: {
  //   filteredPosts() {
  //     return this.posts.filter(post => post.title.match(this.search))
  //   }
  // },
  filters: {
    toUpper(value) {
      return value.toUpperCase()
    },
    shorten(val) {
      return val.slice(0,100) + '...'
    }
  },
  directives: {
    color: {
      bind(el) {
        el.style.color = '#' + Math.random().toString().slice(2,8)
      }
    }
  }
}
</script>

<style>

</style>