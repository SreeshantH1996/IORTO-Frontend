<template>
  <div class="cont">
    <div style="margin: 7%; text-align: left; margin-bottom: 13%">
      <h2>RTO Registration Form</h2>

      <form
        v-on:submit.prevent="RtoRegsitrationSubmit()"
        style="margin-top: 2%"
        id="rto_registrationfrom"
      >
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              name="name"
              placeholder="Enter you name"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Contact Number</label>
            <input
              type="number"
              class="form-control"
              name="phnumber"
              id="exampleFormControlInput1"
              placeholder="Enter a valid number"
              v-model="phnumber"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Officer ID</label>
          <div style="color: red;font-size:12px;">**RTO id should will be unique for each district, Make sure you have valid ID from the admin</div>
            <input
              type="text"
              class="form-control"
              name="rtoid"
              id="exampleFormControlInput1"
              placeholder="Enter a valid ID"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">District</label>
            <select name="district" required class="form-control" id="exampleFormControlSelect1">
              <option value="">Select and option</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Idukki">Idukki</option>
              <option value="Kannur">Kannur</option>
              <option value="Kasaragod">Kasaragod</option>
              <option value="Kollam">Kollam</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Kozhikode">Kozhikode</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Pathanamthitta">Pathanamthitta</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              <option value="Thrissur">Thrissur</option>
              <option value="Wayanad">Wayanad</option>
            </select>
          </div>
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Enter a valid username"
              required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="***********"
              v-model="userRegpas"
              required
            />
          </div>
          <div class="form-group">
            <label>Reneter the password</label>
            <input
              type="password"
              class="form-control"
              placeholder="***********"
              v-model="userRegrep"
              required
            />
          </div>
          <span style="color:red;">All field marked as * are mandatory</span><br>  
          <button style="margin-top:2%;" type="submit" class="btn btn-sm btn-primary">Submit</button>
          <a href="">
              <button type="button" style="margin-top:2%;margin-left:1%;" class="btn btn-sm btn-primary">
                  Cancel
              </button>
          </a>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/RtoRegistration.ts"></script>
<style scoped src="../css/RtoRegistration.css"></style>          