<template>
  <nav>
    <h1>{{ title }}</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello World'
    }
  }
}
</script>

<style scoped>
  nav {
    background: darkslateblue;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.137);
  }

</style>