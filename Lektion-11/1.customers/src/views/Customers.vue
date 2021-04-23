<template>
  <div class="container mt-3">
    <AddCustomerForm class="my-5" />
    <CustomerList />
  </div>
</template>

<script>
import AddCustomerForm from '../components/customer/AddCustomerForm'
import CustomerList from '../components/customer/CustomerList'
export default {
  components: {
    AddCustomerForm,
    CustomerList
  }
}
</script>

<style>

</style>