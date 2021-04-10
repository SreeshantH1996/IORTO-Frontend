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
      <div style="margin: 7%; text-align: left; margin-bottom: 13%">
        <h4>Please verify the detials and upload the required documents.</h4>
        <div style="margin-top: 2%">
          <div class="row">
            <div class="col-6">
              <b>District : Test</b>
            </div>
            <div class="col-6">
              <b>Phone Number : 123456789</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Name of Applicant : Test Name</b>
            </div>
            <div class="col-6">
              <b>Realtion : Father , Name : Test Name</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Gender : Male</b>
            </div>
            <div class="col-6">
              <b>Qualification : test</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Emergency Phone Number : 1234567</b>
            </div>
            <div class="col-6">
              <b>Date Of birth : 11/22/2020</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Country Of Birth : Canada</b>
            </div>
            <div class="col-6">
              <b>Blood Group : B+</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b
                >Identification Mark 1 :
                testetsetsetstestetsetstesdfsfsdfsdfsdfsdfsdfs</b
              >
            </div>
            <div class="col-6">
              <b>Identification Mark 2 : testetsetsetstestetsetstes</b>
            </div>
          </div>

          <hr />
          <h4>Permanent Address</h4>
          <div class="row">
            <div class="col-6">
              <b>House Name / Number : </b>
            </div>
            <div class="col-6">
              <b>Street : test</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Location : Location</b>
            </div>
            <div class="col-6">
              <b>Pincode : 682312</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Village : Village</b>
            </div>
            <div class="col-6">
              <b>Taluk : Taluk</b>
            </div>
          </div>

          <hr />
          <h4>Temperory Address</h4>
          <div class="row">
            <div class="col-6">
              <b>House Name / Number : </b>
            </div>
            <div class="col-6">
              <b>Street : test</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Location : Location</b>
            </div>
            <div class="col-6">
              <b>Pincode : 682312</b>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <b>Village : Village</b>
            </div>
            <div class="col-6">
              <b>Taluk : Taluk</b>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 4%">
          <div class="col-12">
            <a href="/#/createlicence/">
              <button class="btn btn-lg btn-primary">Edit Details</button>
            </a>
          </div>
        </div>
        <hr />
        <div style="margin-top: 2%">
          <h4>Upload Documnets</h4>
          <form action="">
            <div class="row" style="margin-top: 3%">
              <div class="col-6">
                <div class="form-group">
                  <select name="bloodgroup" class="form-control" required>
                    <option value="">Select ID proof</option>
                    <option value="sslc">SSLC Certificate</option>
                    <option value="adhar">Adhar</option>
                    <option value="vid">Voter ID</option>
                    <option value="passport">Passport</option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">

                  <input
                    type="file"
                    class="form-control-file"
                    accept="application/pdf"
                    name="identityproof"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label
                    >Eye Certificate<span style="color: red">*</span></label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
 
                  <input
                    type="file"
                    class="form-control-file"
                    accept="application/pdf"
                    name="eyecertificate"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label
                    >Self Declaration Form
                    <span style="color: red">*</span></label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">

                  <input
                    type="file"
                    class="form-control-file"
                    accept="application/pdf"
                    name="selfdeclarationfrom"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label
                    >Photo of Applicant<span style="color: red">*</span></label
                  >
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">

                  <input
                    type="file"
                    class="form-control-file"
                    accept=".jpg,.gif,.png"
                    name="photo"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Signature<span style="color: red">*</span></label>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">

                  <input
                    type="file"
                    class="form-control-file"
                    accept=".jpg,.gif,.png"
                    name="signature"
                  />
                </div>
              </div>
            </div>

            <span style="color: red">All fields with * mark is mandatory</span>
            <div class="row" style="margin-top: 2%; margin-bottom: 2%">
              <div class="col-6">
                <button type="submit" class="btn btn-lg btn-primary">
                  Submit
                </button>
              </div>
              <div class="col-6" style="text-align: right">
                <a href="/#/userhome">
                  <button type="button" class="btn btn-lg btn-primary">
                    Cancel
                  </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
          <button id="rzp-button1" v-on:click="payMoney()">Pay</button>
      </div>
    </div>
  </div>
</template>    
<script lang="ts" src="../ts/UploadDocuments.ts"></script>
<style scoped src="../css/UploadDocuments.css"></style>