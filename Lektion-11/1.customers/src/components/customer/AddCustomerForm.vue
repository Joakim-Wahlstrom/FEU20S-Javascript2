<template>
  <form class="row" @submit.prevent="onSubmit">
    <div class="col-9">
      <div class="form-outline">
        <input type="text" id="form1" class="form-control border-bottom" v-model="customerName"/>
        <label class="form-label" for="form1">Enter Customer Name</label>
      </div>
    </div>
    <div class="col-3">
      <button class="btn btn-info w-100">Add Customer</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      customerName: ''
    }
  },
  methods: {
    ...mapActions(['addCustomer']),
    onSubmit() {
      this.addCustomer(this.customerName)
      this.customerName = ''
    }
  }
}
</script>

<style>

</style>