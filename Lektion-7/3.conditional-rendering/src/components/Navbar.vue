<template>
  <nav>
    <h1>LOGO</h1>
    <ul v-if="active" >
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
    <ul v-else >
      <li><a href="#">Login</a></li>
      <li><a href="#">Register</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['active']
}
</script>

<style scoped>
  nav {
    background: darkgreen;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }

</style>