<template>
  <!-- Card deck -->
<div class="card-deck">
  <card :imgUrl="imgOne"  title="HEJ" body="alskfnlkglg köplsd fkpösadk fkfosdp" />
  <card imgUrl="@/assets/img/bild2.jpg" title="HEJ2" body="alskfnlkglg köplsd" />
  <card imgUrl="https://images.unsplash.com/photo-1611095788646-86737a001141?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" />

</div>
<!-- Card deck -->
</template>

<script>
import Card from './Card'

export default {
  data() {
    return {
      imgOne: require('@/assets/img/bild1.jpg')
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>