<template>
  <div @click.self="$emit('close')" id="modal" class="d-flex justify-content-center align-items-center">
    <div class="border bg-white p-5">
      <p class="text-danger">You must complete the todo before deleting it</p>
      <button @click="$emit('close')" class="btn btn-danger">Ok!</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
  #modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* height: 100vh;
    width: 100%; */
    z-index: 10;
    background: rgba(0, 0, 0, 0.246);
  }
  .border {
    box-shadow: 2px 2px 10px -3px #333;
  }

</style>