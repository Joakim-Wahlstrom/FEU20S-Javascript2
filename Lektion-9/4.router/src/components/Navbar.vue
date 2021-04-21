<template>
  <nav>
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><router-link to="/" exact class="link">Home</router-link></li>
      <li><router-link to="/about" exact class="link">About</router-link></li>
    </ul>
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
    background: #002222;
    color: #fff;
  }
  li {
    list-style: none;
  }
  .link {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  .link:hover {
    background: rgba(0, 0, 0, 0.233);
  }
  .router-link-active {
    text-decoration: underline;
  }
  /* .router-link-exact-active {
    text-decoration: underline;
  } */
</style>