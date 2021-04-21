<template>
  <footer class="bg-info text-center">
    <div class="text-white p-4">
      &copy; {{ new Date().getFullYear() }} Copyright
      <a href="#" class="text-white">Meetingroom.com</a>
      <span class="small ms-4">
        <router-link class="text-white mx-2" to="/about">About</router-link>
        <router-link class="text-white mx-2" to="/integrity">Integrity Agreement</router-link>
      </span>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>