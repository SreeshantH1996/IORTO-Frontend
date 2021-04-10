<template>
  <div>
    <!-- HEADER START -->
    <div id="header">
      <div class="row">
        <div
          class="col-6"
          style="
            text-align: left;
            color: white;
            font-weight: 900;
            font-size: 27px;
          "
        >
          <span> RTO-OLVS </span>
        </div>
        <div class="col-6" style="text-align: right">
          <button class="btn-lg btn-primary" style="margin-right: 4px">
            Edit Profile
          </button>
          <button class="btn-lg btn-primary">Logout</button>
        </div>
        <span style="font-size: 3px; color: white; margin-left: 1%">
          Associated with RTO, Kerala
        </span>
      </div>
    </div>
    <!-- HEADER END -->
    <div class="cont">
      <div style="text-align: left; margin: 4%">
        <h3>Fill the form with valid data</h3>
        <br />
        <form v-on:submit.prevent="CreateLicence()" id="createlicence">
          <div class="row">
            <div class="col-6">
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
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Phone Number<span style="color: red">*</span></label>
                <input
                  name="phnumber"
                  type="number"
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
                  class="form-control"
                  placeholder="Enter a valid name"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <div class="row">
                  <div class="col-4">
                    <label>Relation<span style="color: red">*</span></label>
                    <select name="relation" class="form-control" required>
                      <option value="">--</option>
                      <option value="fater">Father</option>
                      <option value="mother">Mother</option>
                    </select>
                  </div>
                  <div class="col-8">
                    <input
                      style="margin-top: 10%"
                      name="relationname"
                      type="text"
                      class="form-control"
                      placeholder="Enter a valid name"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Gender<span style="color: red">*</span></label>
                <select name="dender" class="form-control" required>
                  <option value="">--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="trans">Transgender</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Qualification<span style="color: red">*</span></label>
                <select name="dender" class="form-control" required>
                  <option value="">--</option>
                  <option value="No formal education">
                    No formal education
                  </option>
                  <option value="Primary education">Primary education</option>
                  <option value="Secondary education">
                    Secondary education or high school
                  </option>
                  <option value="GED">GED</option>
                  <option value="Vocational qualification">
                    Vocational qualification
                  </option>
                  <option value="Bachelor's degree">Bachelor's degree</option>
                  <option value="Master's degree">Master's degree</option>
                  <option value="Doctorate or higher">
                    Doctorate or higher
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Emergency Phone Number</label>
                <input
                  name="enumber"
                  type="number"
                  class="form-control"
                  placeholder="Enter a valid ph number"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Date Of Birth<span style="color: red">*</span></label>
                <input
                  name="dob"
                  type="date"
                  class="form-control"
                  placeholder="Enter a valid date"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Country Of Birth<span style="color: red">*</span></label>
                <input
                  name="country"
                  type="text"
                  class="form-control"
                  placeholder="Enter a valid name"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Blood Group<span style="color: red">*</span></label>
                <select name="bloodgroup" class="form-control" required>
                  <option value="">--</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label
                  >Identifiaction Mark 1<span style="color: red">*</span></label
                >
                <input
                  name="idenmark1"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label
                  >Identifiaction Mark 2<span style="color: red">*</span></label
                >
                <input
                  name="idenmark2"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
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
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Taluk<span style="color: red">*</span></label>
                <input name="taluk" type="text" class="form-control" required />
              </div>
            </div>
          </div>

          <hr />

          <h5><b>Present Address</b></h5>
          <div class="row">
            <div class="col-12">
              Same as above
              <input
                style="margin-left: 1%"
                class="form-check-input"
                id="is3dCheckBox"
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
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Class of vehicle<span style="color: red">*</span></label>
                <select name="bloodgroup" class="form-control" required>
                  <option value="">--</option>
                  <option value="MC50CC">
                    Motor Cycle less than 50cc (MC50CC)
                  </option>
                  <option value="MCWOG">
                    Motor Cycle Without Gear (Non Transpot)(MCWOG)
                  </option>
                  <option value="MCWG">
                    Motor Cycle With Gear (Non Transpot)(MCWG)
                  </option>
                  <option value="LMV">LMV-NT(LMV)</option>
                  <option value="3WNT">LMV-3 Wheeler NT (3W-NT)</option>
                  <option value="Tractor">LMV-Tractor-NT (Tractor)</option>
                  <option value="INVCRG">
                    Invalid Carriage Vehicle (INVCRG)
                  </option>
                  <option value="RDRLR">Road Roller (RDRLR)</option>
                  <option value="OTHER">Other Others(OTHER)</option>
                  <option value="LDRXCV">
                    Others-Loader/Excavator (LDRXCV)
                  </option>
                </select>
              </div>
            </div>
            <!-- <div class="col-6">
              <div class="form-group">
                <label>Taluk<span style="color: red">*</span></label>
                <input name="taluk" type="text" class="form-control" required />
              </div>
            </div> -->
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
<script lang="ts" src="../ts/CreateLicence.ts"></script>
<style scoped src="../css/CreateLicence.css"></style>
