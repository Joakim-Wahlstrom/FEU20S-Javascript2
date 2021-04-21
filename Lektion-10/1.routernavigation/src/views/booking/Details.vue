<template>
  <div class="container my-5 py-5 shadow-1">
    <section class="text-center">
      <h3 class="mb-5">{{ $route.params.id }}</h3>
      
      <div class="row">
        <div class="col-lg-6">

          <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">

              <!-- absolut URL: https://localhost:8080/assets/images/buildings/building1.jpg -->
              <!-- relative URL: ../../assets/images/buildings/building1.jpg -->

              <div v-for="(image, index) in meetingRoom.images" :key="index" class="carousel-item" :class="{active: image.active}" >
                <img
                  :src="require('../../assets/images/buildings/' + image.url)"
                  class="d-block w-100"
                  :alt="image.alt"
                />
              </div>
              
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-mdb-target="#carouselExampleControls"
              data-mdb-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>


    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BookingDetails',
  data() {
    return {
      meetingRoom: {}
    }
  },
  methods: {
    getARoom() {
      axios.get('http://localhost:3000/meetingrooms/' + this.$route.params.id)
        .then(res => this.meetingRoom = res.data)
    }
  },
  created() {
    this.getARoom()
  }
}
</script>

<style>

</style>