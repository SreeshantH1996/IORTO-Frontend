<template>
  <div>
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
              <p style="margin-top:8%;" class="card-text">
                Current Status of your Application <br> <b style="color:red">{{UserStatus}}</b>
              </p>
              <span v-if="UserStatus == 'Application Filled'" >
                <a href="/#/uploaddocuments" class="card-link">Click here to upload documents</a>
              </span>
              <span v-if="UserStatus == 'Documents Uploaded'">
                <a href="/#/payments" class="card-link">Click here to complete the payment</a>
              </span>
              <span v-if="UserStatus == 'Not yet Applied'">
                <a href="/#/newlicence" class="card-link">Click here to apply</a>
              </span>
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