<template>
  <div>
    <appNavbar />
    <hero />
    <testimonials />
    <app-footer />
  </div>
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Hero from './components/Hero.vue'
import Testimonials from './components/testimonials/Testimonials.vue'
export default {
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
    Hero,
    Testimonials
  }
}
</script>

<style>

</style>
