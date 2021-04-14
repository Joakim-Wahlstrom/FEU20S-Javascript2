<template>
  <div class="col">
    <div class="card">
      <h5 class="card-header bg-primary text-white text-center py-4">
        <strong>SIGN UP</strong>
      </h5>
      <div class="card-body">
        <form>
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="name" class="form-control border-bottom" />
                <label class="form-label" for="name">Name</label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="age" class="form-control border-bottom" />
                <label class="form-label" for="age">Age</label>
              </div>
            </div>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control border-bottom" />
            <label class="form-label" for="form3Example3">Email address</label>
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

}
</script>

<style>

</style>