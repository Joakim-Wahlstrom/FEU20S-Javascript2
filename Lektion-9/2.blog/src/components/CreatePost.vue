<template>
  <div>
    <form class="border border-light p-5">
      <h4 class="h4 text-center mb-4">Create a new post</h4>
      
      <div class="mb-4">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control">
        <p class="invalid-feedback">Please enter a title</p>
      </div>

      <div class="mb-4">
        <label for="content">Content</label>
        <textarea id="content" class="form-control"></textarea>
        <p class="invalid-feedback">Please enter some content</p>
      </div>

      <p>Categories</p>
      <div class="d-flex justify-content-evenly">
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="travel" value="Travel">
          <label for="travel" class="custom-control-label">Travel</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="food" value="Food">
          <label for="food" class="custom-control-label">Food</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="computers" value="Computers">
          <label for="computers" class="custom-control-label">Computers</label>
        </div>
        <div class="custom-control custom-checkbox mb-4 mr-4">
          <input type="checkbox" class="custom-control-input" id="frontend" value="Frontend">
          <label for="frontend" class="custom-control-label">Frontend</label>
        </div>
      </div>

      <label for="select">Author</label>
      <select id="select" class="browser-default custom-select mb-4">
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
          <h2 class="card-header-title my-3 white-text">Marta</h2>

        </div>

        <!-- Card content -->
        <div class="card-body card-body-cascade">
          <p>Content:</p>
          <p>content{{}}</p>
          <p>Categories:</p>

          <p>Author: author</p>
          
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
      authors: ['Joakim', 'Hans', 'Jeanette', 'Tommy']
    }
  }
}
</script>

<style>

</style>