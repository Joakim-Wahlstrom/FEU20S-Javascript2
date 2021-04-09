<template>
  <div>
    <app-navbar />
    <div class="output container">
      {{ message }}
      <Functions class="mt-5" />
      <app-input class="mt-5" />
      <Computed class="mt-5" />
    </div>
    <Footer msg="message" />
    <Footer v-bind:msg="message" />
    <Footer :msg="randomMsg" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Functions from './components/Functions'
import appInput from './components/Input'
import Computed from './components/Computed'

export default {
  name: 'App',
  components: { 
    appNavbar: Navbar,
    // appFooter: Footer
    // appFooter
    Footer,
    Functions,
    appInput,
    Computed
  },
  data() {
    return {
      message: 'Ett meddelande från våran data',
      messages: ['1', '2', '3', '4', '5'],
      meddelande: ''
    }
  },
  computed: {
    randomMsg() {
      let nr = Math.floor(Math.random() * 4)
      return this.messages[nr]
    }
  },
  // methods: {
  //   randomMsg() {
  //     let nr = Math.floor(Math.random() * 4)
  //     // return this.messages[nr]
  //     this.meddelande = this.messages[nr]
  //   }
  // },
  // created() {
  //   this.randomMsg()
  // }

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
  margin-top: 2rem;
}
.output {
  min-height: 500px;
}

</style>
