<template>
  <div>
    <div class="card card-cascade" v-for="(post, index) in posts" :key="index">

        <!-- Card image -->
        <div class="view view-cascade gradient-card-header blue-gradient text-center">

          <!-- Title -->
          <h2 class="card-header-title my-3 white-text">{{ post.title }}</h2>

        </div>

        <!-- Card content -->
        <div class="card-body card-body-cascade">
          <div class="d-flex justify-content-between">
            <ul class="list-group list-group-horizontal">
              <li v-for="(cat, index) in post.categories" :key="index" ><p class="small">{{ cat }}</p></li>
            </ul>
            <p class="small">Author: {{ post.author }}</p>
          </div>
          <p>{{ post.content }}</p>

          
        </div>

      </div>
      <!-- Card -->
  </div>
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style scoped>
 .list-group {
   list-style: none;
 }
 .list-group li p {
   border: 1px solid #333;
   border-radius: 3px;
   padding: 0 0.1rem;
   margin-right: 0.2rem;
 }
</style>