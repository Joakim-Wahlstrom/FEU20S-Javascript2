<template>
  <div>
    <hero />
    <div class="container mt-5">

      <div class="row">

        <div class="col-6">
          <sign-in />
        </div>

        <div class="col-6">
          <sign-up/>
        </div>

        <!-- <div class="col-12">
          <sign-in />
        </div> -->

      </div>

    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default {
  name: 'App',
  components: { 
    Hero,
    SignIn,
    SignUp,
  },

}
</script>

<style>

</style>
