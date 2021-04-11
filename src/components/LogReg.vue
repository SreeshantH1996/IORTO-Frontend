<template>
  <div>
    <div class="cont" id="main_cont">
      <!-- SIGN IN START -->
      <div class="form sign-in">
        <form id="signupform" v-on:submit.prevent="LoginUser()">
          <h2 style="margin-left: 4%; margin-bottom: 2%">
            Welcome Back, <b style="color: green">Login</b> to Continue
          </h2>
          <div class="signup_form">
            <div class="form-group">
                <label>Username<span style="color: red">*</span></label>
                <input
                  name="username"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
            <div class="form-group">
                <label>Password<span style="color: red">*</span></label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  required
                />
              </div>
            <div class="form-group">
                <label>Login As<span style="color: red">*</span></label>
                <select name="user_type" class="form-control" required>
                  <option value="">--</option>
                  <option value="admin">Admin</option>
                  <option value="User">User</option>
                  <option value="rto">RTO Officer</option>
                </select>
              </div>
            <button
              type="submit"
              class="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <!-- SIGN IN END -->

      <!-- SIDE CONTENT START -->
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h1 style="font-family: fantasy">RTO-OLVS</h1>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h1 style="font-family: fantasy">RTO-OLVS</h1>
            <p>
              If you already has an account, just sign in. We've missed you!
            </p>
          </div>
          <div class="img__btn" v-on:click="ToggleFunction()">
            <span class="m--up">Sign Up</span>
            <span class="m--in">Sign In</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2 style="margin-left: 4%; margin-bottom: 2%">
            Welcome, <b style="color: green">Register</b> to Continue
          </h2>
          <a href="/#/userregistration">
          <b-button
            style="background: #11770a;margin-top:2%;"
            type="button"
            >Regsiter as a User</b-button
          >
          </a>
          <b-button
            v-b-modal.RtoRegistartionModal
            style="background: #11770a;margin-top:2%;"
            type="button"
            >Register as a RTO Officer</b-button
          >

        </div>
      </div>
    </div>
    <!-- RTO REGISTRATION MODAL -->
    <b-modal
      id="RtoRegistartionModal"
      title="RTO Officer Registration"
    >
      <form>
        <div class="signup_form">
          <div class="form-group">
            <label>Name</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter you name"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Contact Number</label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter a valid number"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Officer ID</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter a valid ID"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">District</label>
            <select class="form-control" id="exampleFormControlSelect1">
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
              placeholder="Enter a valid username"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="***********"
            />
          </div>
          <div class="form-group">
            <label>Reneter the password</label>
            <input
              type="password"
              class="form-control"
              placeholder="***********"
            />
          </div>
          <button type="button" class="submit">Sign Up</button>
        </div>
      </form>
    </b-modal>
    <!-- RTO REGISTRATION MODAL END -->
  </div>
</template>
<script lang="ts" src="../ts/LogReg.ts"></script>
<style scoped src="../css/LogReg.css"></style>