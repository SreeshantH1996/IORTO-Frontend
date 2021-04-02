<template>
  <div>
    <div class="cont" id="main_cont">
      <!-- SIGN IN START -->
      <div class="form sign-in">
        <form id="signupform">
          <h2 style="margin-left: 4%; margin-bottom: 2%">
            Welcome Back, <b style="color: green">Login</b> to Continue
          </h2>
          <div class="signup_form">
            <div class="form-group">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter a valid username"
                required
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="***********"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1"
                >Login As<span style="color: red">*</span></label
              >
              <select
                name="district"
                class="form-control"
                id="exampleFormControlSelect1"
                required
              >
                <option value="user">User</option>
                <option value="rtoofficer">RTO Officer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="button"
              class="submit"
              v-on:click="LoginButtonClick()"
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
            <h1 style="font-family: fantasy">IORTO</h1>
            <p>Sign up and discover great amount of new opportunities!</p>
          </div>
          <div class="img__text m--in">
            <h1 style="font-family: fantasy">IORTO</h1>
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
          <b-button
            v-b-modal.UserRegistartionModal
            style="background: #11770a;margin-top:2%;"
            type="button"
            >Regsiter as a User</b-button
          >
          <b-button
            v-b-modal.RtoRegistartionModal
            style="background: #11770a;margin-top:2%;"
            type="button"
            >Register as a RTO Officer</b-button
          >

          <!-- <button type="button" class="fb-btn">Join with <span>facebook</span></button> -->
        </div>
      </div>
    </div>
    <!-- USER REGISTRATION MODAL START -->
    <b-modal hide-footer id="UserRegistartionModal" title="User Registration">
      <form id="user_registrationfrom">
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
              <label>Enter the password<span style="color:red">*</span></label>
              <input v-model="userRegrep" type="password" class="form-control"  placeholder="***********" required>
            </div>
          <!-- <div class="form-group" style="margin-left: 12%;display: None;" id="error_message">
              <b>All fields marked as <span style="color:red">*</span> are required</b>
            </div> -->
          <button type="button" v-on:click="UserRegsitrationSubmit()" class="submit">Sign Up</button>
        </div>
      </form>
    </b-modal>
    <!-- USER REGISTRATION MODAL END -->

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