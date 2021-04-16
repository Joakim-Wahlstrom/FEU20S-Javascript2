<template>
  <div>
    <button class="btn btn-sm my-0 ml-0" :class="loginClasses" @click="change('Login')">Login</button>
    <button class="btn btn-sm my-0" :class="registerClasses" @click="change('Signup')" >Register</button>
    <!-- <Login /> -->
    <!-- <Signup /> -->
    <keep-alive>
      <component :is="comp" />
    </keep-alive>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'
export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      comp: 'Login',
      login: true
    }
  },
  methods: {
    change(val) {
      this.comp = val
      if(val === 'Login')
        this.login = true
      else  
        this.login = false
    }
  },
  computed: {
    loginClasses() {
      return {
        'btn-info': this.login,
        'btn-outline-info': !this.login
      }
    },
    registerClasses() {
      return {
        'btn-info': !this.login,
        'btn-outline-info': this.login
      }
    }
  }
}
</script>

<style>

</style>