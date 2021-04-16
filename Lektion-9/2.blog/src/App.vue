<template>
  <div class="m-2 mt-5">
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': createPost, 'btn-outline-primary': !createPost}" @click="component = 'CreatePost'">Create</button>
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': !createPost, 'btn-outline-primary': createPost}" @click="component = 'ViewPosts'">View</button>
    <div class="border border-primary p-3">
      <div class="container">
        <component :is="component" />
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
  }
}
</script>

<style>

</style>
