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
        <span>
          RTO-OLVS
        </span>
        </div>
        <div class="col-6" style="text-align: right">
          <button class="btn-lg btn-primary" style="margin-right: 4px">
            Edit Profile
          </button>
          <button class="btn-lg btn-primary">Logout</button>
        </div>
          <span style="font-size:3px;color:white;margin-left:1%;">
          Associated with RTO, Kerala
          </span>
      </div>
    </div>
    <!-- HEADER END -->

    <div class="cont">
      <div class="row" id="rowinside">
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">Document List</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Click here</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">Licence Renewel</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">Click here</a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">Apply for Licence</h3>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/#/newlicence" class="card-link">Click here</a>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT START -->
      <div>
          <h1>About </h1>
          <p style="margin: 4%;margin-top:0% !important; color: #690000;font-family: cursive;">
              Rto –Online Licence Verification System  provide user to register for driving licence and renewal 
              of driving licence. A Licence holder can submit applications on-line to the respective rto 
              officer for licence renewal. Driving is a vital set of skill which makes your life a lot 
              easier and comfortable. A Learner’s Licence is a certificate issued by the Regional Transport 
              Office (RTO) which plays as a provisional and restricted driving license. 
              which is issued to someone who’s in his beginning stage of driving or learning how to drive. 
              A person owning an active driving license issued by the Regional Transport Office (RTO) 
              is allowed to drive a motor vehicle in any public place. 
          </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/UserHome.ts"></script>
<style scoped src="../css/UserHome.css"></style>