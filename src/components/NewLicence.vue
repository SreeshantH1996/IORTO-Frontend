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
        <div style="margin:7%;text-align:left;margin-bottom:13%;">
        <h4>Following are the steps involved in driving licence registration:</h4>
        <div style="margin-top:2%;">
            <b>
            1)	Fill application form<br>
            2)	Upload document<br>
            3)	Upload photo and signature<br>
            4)	Complete the Payment<br>
            </b>
        </div>
            <hr>
        <div style="margin-top:2%;">
          <a href="" style="color:#545454;"> <b>CURRENT STATUS</b> </a> 
        </div>
        <div style="margin-top:3%;">
            <b>Download the given document and submit it sufficiently during the document uploadation process.</b><br>
            Doctor attested eye certificate - <a href="http://localhost:8000/static/Files/eyecertificate.pdf" target="_blank">click here to download</a> <br>
            Self declaration form - <a href="http://localhost:8000/static/Files/selfdeclare.pdf" target="_blank">click here to download</a>
        </div>
        </div>
        <div>
            <div class="row" style="margin:5%;">
                <div class="col-6" style="text-align:left;">
                  <a href="/#/userhome">
                    <button class="btn btn-primary">Back</button>
                  </a>
                </div>
                <div class="col-6" style="text-align:right;">
                  <a href="/#/createlicence">
                    <button class="btn btn-primary">Next</button>
                  </a>
                </div>
            </div>
        </div>

    </div>
  </div>
</template>   
<script lang="ts" src="../ts/NewLicence.ts"></script>
<style scoped src="../css/NewLicence.css"></style>