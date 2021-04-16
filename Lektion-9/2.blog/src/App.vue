<template>
  <div class="m-2 mt-5">
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': createPost, 'btn-outline-primary': !createPost}" @click="component = 'CreatePost'">Create</button>
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': !createPost, 'btn-outline-primary': createPost}" @click="component = 'ViewPosts'">View</button>
    <div class="border border-primary p-3">
      <div class="container">
        <keep-alive>
          <component :is="component" @new-post="newPost" :posts="posts" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  components: {
    CreatePost,
    ViewPosts
  },
  data() {
    return {
      posts: [],
      component: 'CreatePost',
      createPost: true
    }
  },
  methods: {
    newPost(post) {
      this.posts.push(post)
      this.component = 'ViewPosts'
    }
  },
  watch: {
    component: function() {
      if(this.component === 'CreatePost')
        this.createPost = true
      else
        this.createPost = false
    }
  }
}
</script>

<style>

</style>
