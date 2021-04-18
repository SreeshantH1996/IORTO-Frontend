<template>
  <div>
    <div class="cont">
      <div
        style="
          padding-left: 5%;
          padding-right: 5%;
          padding-top: 5%;
          text-align: left;
        "
      >
        <h4>Create new RTO Officer</h4>
        <form v-on:submit.prevent="CreateRTO()" id="createRTO">
          <div class="row" style="margin-top: 2%">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1"
                  >District<span style="color: red">*</span></label
                >
                <select
                  name="district"
                  class="form-control"
                  id="rtodistrict"
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
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>RTO Official ID<span style="color: red">*</span></label>
                <input
                  name="rtoid"
                  type="text"
                  id="rtoid"
                  class="form-control"
                  placeholder="Enter a valid id"
                  required
                />
              </div>
            </div>
          </div>
          <span style="color: red">All fields with * mark is mandatory</span>
          <div class="row" style="margin-top: 2%; margin-bottom: 2%">
            <div class="col-6">
              <button type="submit" class="btn btn-sm btn-primary">
                Submit
              </button>
            </div>
            <!-- <div class="col-6" style="text-align: right">
                <a href="/#/userhome">
              <button type="button" class="btn btn-sm btn-primary">Cancel</button>
                </a>
            </div> -->
          </div>
        </form>
        <div style="margin-top: 4%">
          <h4>RTO List</h4>
          <table class="table" style="text-align: left">
            <thead>
              <tr>
                <th scope="col">District</th>
                <th scope="col">RTO ID</th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rto in RtoList" v-bind:key="rto.id">
                <th>{{rto.district}}</th>
                <th>{{rto.officerid}}</th>
                <th><button v-on:click="deleteRTOOfficer(rto.id)" class="btn btn-sm btn-danger" style="margin-left:2%;">Delete</button></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/Adminhome.ts"></script>
<style scoped src="../css/Adminhome.css"></style>