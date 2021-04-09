<template>
  <div>
    <app-navbar />
    <div class="output container">
      {{ message }}
    </div>
    <Footer msg="message" />
    <Footer v-bind:msg="message" />
    <Footer :msg="message" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: { 
    appNavbar: Navbar,
    // appFooter: Footer
    // appFooter
    Footer
  },
  data() {
    return {
      message: 'Ett meddelande från våran data'
    }
  }

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.mt-5 {
  margin-top: 3rem;
}
.output {
  min-height: 500px;
}

</style>
