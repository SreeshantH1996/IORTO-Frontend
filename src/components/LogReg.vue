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
                  <option value="Admin">Admin</option>
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
          <a href="/#/rto_registration">
          <b-button
            style="background: #11770a;margin-top:2%;"
            type="button"
            >Register as a RTO Officer</b-button
          >
          </a>

        </div>
      </div>
    </div>
    <!-- RTO REGISTRATION MODAL -->
    <b-modal
      id="RtoRegistartionModal"
      title="RTO Officer Registration"
    >
      <form>
        
      </form>
    </b-modal>
    <!-- RTO REGISTRATION MODAL END -->
  </div>
</template>
<script lang="ts" src="../ts/LogReg.ts"></script>
<style scoped src="../css/LogReg.css"></style>