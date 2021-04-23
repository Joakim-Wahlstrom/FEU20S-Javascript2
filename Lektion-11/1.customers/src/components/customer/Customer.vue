<template>
  <tr :class="{inactive: !customer.active}">
    <th scope="row">{{ id }}</th>
    <td>{{ customer.name }}</td>
    <td>{{ isActiveText }}</td>
    <td class="d-flex justify-content-end">
      <button @click="toggleActive(customer)" class="btn btn-sm btn-info btn-fixed-width me-2">{{ activeStateText }}</button>
      <!-- <button @click="customer.active = !customer.active" class="btn btn-sm btn-info btn-fixed-width me-2">{{ activeStateText }}</button> -->
      <button @click="removeCustomer(customer)" class="btn btn-sm btn-danger btn-fixed-width"><i class="fas fa-trash"></i> Delete</button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['customer', 'id'],
  methods: {
    ...mapActions(['removeCustomer', 'toggleActive'])
  },
  computed: {
    activeStateText() {
      return this.customer.active
      ? 'Inactivate'
      : 'Activate'
    },
    isActiveText() {
      if(this.customer.active)
        return 'Active'
      else 
        return 'Inactive'
    }
  }
}
</script>

<style scoped>
  .btn-fixed-width {
    width: 110px;
  }
  .inactive {
    color: #dcdcdc;
  }
</style>