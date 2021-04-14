<template>
  <div class="cont">
    <div style="margin: 7%; text-align: left; margin-bottom: 13%">
        <h2>User Registration Form</h2>
            
      <form v-on:submit.prevent="UserRegsitrationSubmit()" style="margin-top:2%;" id="user_registrationfrom">
        <div class="signup_form">
          <div class="form-group">
            <label>Name<span style="color: red">*</span></label>
            <input
              name="name"
              type="text"
              class="form-control"
              v-model="userRegNam"
              placeholder="Enter you name"
              required
            />
          </div>
          <div class="form-group">
            <label>Address<span style="color: red">*</span></label>
            <input
              name="address"
              type="text"
              v-model="userRegAdd"
              class="form-control"
              placeholder="Enter you address"
              required
            />
          </div>
          <div class="form-group">
            <label>Age<span style="color: red">*</span></label>
            <input
              name="age"
              type="number"
              v-model="userRegAge"
              class="form-control"
              placeholder="Enter you age"
              required
            />
          </div>
          <div class="form-group">
            <label>Phone Number<span style="color: red">*</span></label>
            <input
              name="age"
              type="phnumber"
              v-model="phnumber"
              class="form-control"
              placeholder="Enter you age"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1"
              >District<span style="color: red">*</span></label
            >
            <select
              name="district"
              class="form-control"
              v-model="userRegDis"
              id="exampleFormControlSelect1"
              required
            >
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
            <label>Username<span style="color: red">*</span></label>
            <input
              name="username"
              type="text"
              v-model="userRegUna"
              class="form-control"
              placeholder="Enter a valid username"
              required
            />
          </div>
          <div class="form-group">
            <label>Password<span style="color: red">*</span></label>
            <input
              name="password"
              v-model="userRegpas"
              type="password"
              class="form-control"
              placeholder="***********"
              required
            />
          </div>
          <div class="form-group">
            <label>Enter the password<span style="color: red">*</span></label>
            <input
              v-model="userRegrep"
              type="password"
              class="form-control"
              placeholder="***********"
              required
            />
          </div>
          <span style="color:red;">All field marked as * are mandatory</span><br>  
          <button
            style="margin-top:2%;"
            type="submit"
            class="btn btn-lg btn-primary"
          >
            Submit
          </button>
          <a href="">
              <button type="button" style="margin-top:2%;margin-left:1%;" class="btn btn-lg btn-primary">
                  Cancel
              </button>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/UserRegistration.ts"></script>
<style scoped src="../css/UserRegistration.css"></style>