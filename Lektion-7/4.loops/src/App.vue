<template>
  <div>
    <Names :names="names" />
    <Loop :names="names" />
  </div>
</template>

<script>
import Names from './components/Names'
import Loop from './components/Loop'

export default {
  name: 'App',
  components: {
    Names,
    Loop
  },
  data() {
    return {
      names: ['Joakim', 'Jeanette', 'Hans', 'Tommy', 'Haitem', 'Ida', 'Joakim']
    }
  }
}
</script>

<style>

</style>
