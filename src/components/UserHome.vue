<template>
  <div>
    <div class="cont">
      <div class="row" id="rowinside">
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">Document List</h3>
              <p class="card-text">
                You may view all the important and other document uploaded.
              </p>
              <a href="/#/document_list" class="card-link"><button class="btn btn-sm">Click here</button> </a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h3 class="card-title">Licence Renewel</h3>
              <p style="margin-top:8%;" class="card-text">
                Current Status of your Application <br> <b style="color:red">{{RenewalStatus}}</b>
              </p>
              <p v-if="renew_payment" style="margin-top:8%;" class="card-text">
                Payment Status : <br> <b style="color:green">{{renew_payment}}</b>
              </p>
              <span v-if="RenewalStatus == 'Application Filled'" >
                <a href="/#/licence_renewal_upload_document" class="card-link"><button class="btn btn-sm">Upload documents</button></a>
              </span>
              <span v-if="RenewalStatus == 'Documents Uploaded' && UserStatus != 'Documents Uploaded'">
                <a href="/#/payments" class="card-link"><button class="btn btn-sm">Complete payments</button></a>
              </span>
              <span v-if="RenewalStatus == 'Not yet Applied' ">
                <a href="/#/licence_renewal" class="card-link"><button class="btn btn-sm">Click here to apply</button></a>
              </span>
              <span v-if="RenewalStatus == 'Documents Uploaded' && UserStatus == 'Documents Uploaded'">
                <b>You have already one payment pending.</b>
              </span>
              <span v-if="RenewalStatus == 'Payment Completed, Waiting for approvall' || RenewalStatus == 'Rejected' || RenewalStatus == 'Resubmit' || renew_payment == 'Success'">
                <a href="/#/user_status" class="card-link"><button class="btn btn-sm">View status</button></a>
              </span>
              <!-- <span >
                <a href="/#/user_status" class="card-link"><button class="btn btn-sm">View status</button></a>
                <span style="color:red">Reason : <b>{{reason}}</b></span>
              </span> -->
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
              <p v-if="new_payment" style="margin-top:8%;" class="card-text">
                Payment Status : <br> <b style="color:green">{{new_payment}}</b>
              </p>
              <span v-if="UserStatus == 'Application Filled' && RenewalStatus == 'Not yet Applied'" >
                <a href="/#/uploaddocuments" class="card-link"><button class="btn btn-sm">Upload documents</button></a>
              </span>
              <span v-if="UserStatus == 'Documents Uploaded' && RenewalStatus == 'Not yet Applied' && new_payment != 'Success'">
                <a href="/#/payments" class="card-link"><button class="btn btn-sm">Complete payments</button></a>
              </span>
              <span v-if="UserStatus == 'Not yet Applied' && RenewalStatus == 'Not yet Applied'">
                <a href="/#/newlicence" class="card-link"><button class="btn btn-sm">Click here to apply</button></a>
              </span>
              <span v-if="RenewalStatus != 'Not yet Applied' && UserStatus != 'Documents Uploaded'">
                <b>You have already applied for licence renewal</b>
              </span>
              <span v-if="RenewalStatus == 'Documents Uploaded' && UserStatus == 'Documents Uploaded' ">
                <a href="/#/payments" class="card-link"><button class="btn btn-sm">Complete payments</button></a>
              </span>
              <span v-if="UserStatus == 'Payment Completed, Waiting for approvall' || UserStatus == 'Rejected' || UserStatus == 'Resubmit' || new_payment == 'Success'">
                 <a href="/#/new_user_status" class="card-link"><button class="btn btn-sm">View status</button></a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT START -->
      <div>
          <h1>About </h1>
          <p style="margin: 4%;margin-top:0% !important; color: rgb(148 148 148); font-family: inherit;">
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