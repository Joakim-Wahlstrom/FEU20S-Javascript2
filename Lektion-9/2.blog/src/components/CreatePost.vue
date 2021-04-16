<template>
  <div>
    <form class="border border-light p-5" @submit.prevent="create">
      <h4 class="h4 text-center mb-4">Create a new post</h4>
      
      <div class="mb-4">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" :class="{'is-invalid': titErr}" v-model="blog.title">
        <p class="invalid-feedback">Please enter a title</p>
      </div>

      <div class="mb-4">
        <label for="content">Content</label>
        <textarea id="content" class="form-control" v-model="blog.content"></textarea>
        <p class="invalid-feedback">Please enter some content</p>
      </div>

      <p>Categories</p>
      <div class="d-flex justify-content-evenly">
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="travel" value="Travel" v-model="blog.categories">
          <label for="travel" class="custom-control-label">Travel</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="food" value="Food" v-model="blog.categories">
          <label for="food" class="custom-control-label">Food</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="computers" value="Computers" v-model="blog.categories">
          <label for="computers" class="custom-control-label">Computers</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="frontend" value="Frontend" v-model="blog.categories">
          <label for="frontend" class="custom-control-label">Frontend</label>
        </div>
      </div>
      <p class="text-danger small mb-4" :class="{'d-none': !catErr}">Please choose a category</p>

      <label for="select">Author</label>
      <select id="select" class="browser-default custom-select mb-4" v-model="blog.author" >
        <option value="" disabled selected></option>
        <option v-for="(au, index) in authors" :key="index" >{{ au }}</option>
      </select>
      <p class="invalid-feedback mb-4">Please choose an author</p>

      <button class="btn btn-primary btn-block my-4">CREATE POST</button>

    </form>

    <div class="container mt-5">
      <!-- Card -->
      <h2 class="text-center mb-3">Preview</h2>
      <div class="card card-cascade">

        <!-- Card image -->
        <div class="view view-cascade gradient-card-header blue-gradient text-center">

          <!-- Title -->
          <h2 class="card-header-title my-3 white-text">{{ blog.title }}</h2>

        </div>

        <!-- Card content -->
        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>{{ blog.content }}</p>
          <p>Categories:</p>
            <ul class="list-group list-group-horizontal">
              <li v-for="(cat, index) in blog.categories" :key="index" >{{ cat }}</li>
            </ul>
          <p>Author: {{ blog.author }}</p>
          
        </div>

      </div>
      <!-- Card -->
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Joakim', 'Hans', 'Jeanette', 'Tommy'],
      // titErr: true,
      // contErr: false,
      catErr: false,
      // autErr: false
    }
  },
  methods: {
    create(e) {
      if(this.blog.title !== '' && this.blog.content !== '' && this.blog.categories.length > 0 && this.blog.author !== '') {
        this.$emit('new-post', this.blog)
        e.target.forEach(t => t.classList.remove('is-invalid'))
        this.blog = {
          title: '',
          content: '',
          categories: [],
          author: ''
        }
      } else {
        e.target.forEach(t => {
          if(t.type === 'checkbox') {
            if(this.blog.categories.length) {
              t.classList.remove('is-invalid')
              this.catErr = false
            } else {
              t.classList.add('is-invalid')
              this.catErr = true
            }
          } else {
            if(t.value == '')
              t.classList.add('is-invalid')
            else
              t.classList.remove('is-invalid')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .card-header-title {
    min-height: 40px;
  }
  .list-group {
    list-style: none;
  }
  .list-group li {
    padding: 0rem 1rem;
    margin-bottom: 0.5rem;
  }
</style>