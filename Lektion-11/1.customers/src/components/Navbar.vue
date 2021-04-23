<template>
  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="#">Brand</a>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">Posts</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/customers">Customers</router-link>
            </li>
           

           
          </ul>
          <!-- Left links -->

          <!-- Search form -->
          <form class="d-flex w-auto">
            <input
              type="search"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
export default {

}
</script>

<style>

</style>