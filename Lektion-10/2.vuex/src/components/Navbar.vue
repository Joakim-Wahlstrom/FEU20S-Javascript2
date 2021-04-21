<template>
  <nav>
    <router-link to="/" class="logo">LOGO</router-link>
    <div class="nav-links">
      <router-link exact to="/" class="link">Home</router-link>
      <router-link exact to="/about" class="link">About</router-link>
      <router-link exact to="/products" class="link">Products</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #201d1d;
    color: #fff;
  }
  .logo {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .link {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem 1rem;
    display: inline-block;
    position: relative;
  }
  .link:hover {
    color: #c0c0c0;
  }
  .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #00fdfd;
    left: 1rem;
    bottom: 1.2rem;
    right: 1.7rem;
  }
</style>