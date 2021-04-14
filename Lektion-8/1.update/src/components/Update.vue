<template>
  <div class="col">
    <div class="card">
      <h5 class="card-header bg-primary text-white text-center py-4">
        <strong>SIGN UP</strong>
      </h5>
      <div class="card-body">
        <form @submit.prevent="update">
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="">
                <label class="" for="name">Name</label>
                <input type="text" id="name" class="form-control border-bottom" v-model="newName" @keyup="$emit('update-user', newName, newAge, newEmail)" />
              </div>
            </div>
            <div class="col">
              <div class="">
                <label class="" for="age">Age</label>
                <input type="text" id="age" class="form-control border-bottom" v-model="newAge" />
              </div>
            </div>
          </div>

          <!-- Email input -->
          <div class="mb-4">
            <label class="" for="email">Email address</label>
            <input type="email" id="email" class="form-control border-bottom" v-model="newEmail" />
          </div>


          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'email'],
  // props: ['user'],
  data() {
    return {
      newName: this.name,
      newAge: this.age,
      newEmail: this.email
    }
  },
  methods: {
    update() {
      // let user = {
      //   name: this.newName,
      //   age: this.newAge,
      //   email: this.newEmail
      // }
      this.$emit('update-user', this.newName, this.newAge, this.newEmail)
    }
  }
}
</script>

<style>

</style>