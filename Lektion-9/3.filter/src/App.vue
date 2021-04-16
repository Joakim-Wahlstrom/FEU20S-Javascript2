<template>
  <div class="container">
    <input type="text" v-model="search" placeholder="Search..." class="form-control my-5">
    <Posts :posts="filteredPosts" />
  </div>
</template>

<script>
import axios from 'axios'
import Posts from './components/Posts'
export default {
  name: 'App',
  components: {
    Posts
  },
  data() {
    return {
      posts: [],
      search: ''
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => post.title.match(this.search))
    }
  },
  methods: {
    // getPosts() {
    //   axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(res => {
    //     // console.log(res.data)
    //     this.posts = res.data
    //   })
    // .catch(err => console.log(err))
    // }
    async getPosts() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(res)
        this.posts = res.data
      }
      catch(err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getPosts()
  }
}
</script>

<style>

</style>
