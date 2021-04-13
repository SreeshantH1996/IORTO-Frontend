<template>
  <div>
    <div class="cont">
      <div style="text-align: left; margin: 4%">
        <h3>Fill the form with valid data</h3>
        <br />
        <form v-on:submit.prevent="CreateLicenceRenewal()" id="licencerenewal">
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleFormControlSelect1"
                  >District<span style="color: red">*</span></label
                >
                <select
                  name="district"
                  class="form-control"
                  v-model="UserDetials.district"
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
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Phone Number<span style="color: red">*</span></label>
                <input
                  name="phnumber"
                  type="number"
                  v-model="UserDetials.phnumber"
                  class="form-control"
                  placeholder="Enter a valid phnumber"
                  required
                />
              </div>
            </div>
          </div>
          <hr />

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label
                  >Name of Applicant<span style="color: red">*</span></label
                >
                <input
                  name="name"
                  type="text"
                  v-model="UserDetials.name"
                  class="form-control"
                  placeholder="Enter a valid name"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Licence Number<span style="color: red">*</span></label>
                <input
                  name="licencenumber"
                  type="number"
                  class="form-control"
                  v-model="UserDetials.licencenumber"
                  placeholder="Enter a valid date"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Licnece From<span style="color: red">*</span></label>
                {{UserDetials.licencefrom}}
                <input
                  name="licencefrom"
                  type="date"
                  class="form-control"
                  v-model="UserDetials.licencefrom"
                  placeholder="Enter a valid date"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                  {{UserDetials.licencefrom}}
                <label>Licence To<span style="color: red">*</span></label>
                <input
                  name="licenceto"
                  type="date"
                  class="form-control"
                  v-model="UserDetials.licenceto"
                  placeholder="Enter a valid date"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Date Of Birth<span style="color: red">*</span></label>
                <input
                  name="dob"
                  type="date"
                  class="form-control"
                  v-model="UserDetials.dob"
                  placeholder="Enter a valid date"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              
            </div>
          </div>

          <hr />

          <h5><b>Permanent Address</b></h5>
          <br />
          <div class="row" style="margin-top: -2%">
            <div class="col-6">
              <div class="form-group">
                <label
                  >House Name / Number<span style="color: red">*</span></label
                >
                <input
                  name="housename"
                  type="text"
                  v-model="UserDetials.prhousename"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label
                  >Street / Locality / Police Station<span style="color: red"
                    >*</span
                  ></label
                >
                <input
                  name="street"
                  type="text"
                  v-model="UserDetials.prstreet"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label
                  >Location / Landmark<span style="color: red">*</span></label
                >
                <input
                  name="landmark"
                  type="text"
                  v-model="UserDetials.prlocation"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Pincode<span style="color: red">*</span></label>
                <input
                  name="pincode"
                  type="number"
                  v-model="UserDetials.prpincode"
                  class="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Village / Town<span style="color: red">*</span></label>
                <input
                  name="village"
                  type="text"
                  v-model="UserDetials.prvillage"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Taluk<span style="color: red">*</span></label>
                <input v-model="UserDetials.prtaluk" name="taluk" type="text" class="form-control" required />
              </div>
            </div>
          </div>

          <h5><b>Present Address</b></h5>
          <div class="row">
            <div class="col-12">
              Same as above
              <input
                style="margin-left: 1%"
                class="form-check-input"
                id="is3dCheckBox"
                name="sameasabove"
                v-on:change="SameAsAboveClick()"
                type="checkbox"
                checked
              />
            </div>
          </div>
          <br />
          <div id="temporaryadd" style="display: none">
            <div class="row" style="margin-top: -1%">
              <div class="col-6">
                <div class="form-group">
                  <label
                    >House Name / Number<span style="color: red">*</span></label
                  >
                  <input
                    name="tmhousename"
                    type="text"
                    v-model="UserDetials.trhousename"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label
                    >Street / Locality / Police Station<span style="color: red"
                      >*</span
                    ></label
                  >
                  <input
                    name="tmstreet"
                    type="text"
                    v-model="UserDetials.tstreet"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label
                    >Location / Landmark<span style="color: red">*</span></label
                  >
                  <input
                    name="tmlandmark"
                    type="text"
                    v-model="UserDetials.trlocation"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Pincode<span style="color: red">*</span></label>
                  <input
                    name="tmpincode"
                    type="number"
                    v-model="UserDetials.trpincode"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Village / Town<span style="color: red">*</span></label>
                  <input
                    name="tmvillage"
                    type="text"
                    v-model="UserDetials.trvillage"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Taluk<span style="color: red">*</span></label>
                  <input
                    name="tmtaluk"
                    type="text"
                    v-model="UserDetials.trtaluk"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <span style="color: red">All fields with * mark is mandatory</span>
          <div class="row" style="margin-top: 2%; margin-bottom: 2%">
            <div class="col-6">
              <button type="submit" class="btn btn-lg btn-primary">Submit</button>
            </div>
            <div class="col-6" style="text-align: right">
                <a href="/#/userhome">
              <button type="button" class="btn btn-lg btn-primary">Cancel</button>
                </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>    
<script lang="ts" src="../ts/LicenceRenewalForm.ts"></script>
<style scoped src="../css/LicenceRenewalForm.css"></style>
