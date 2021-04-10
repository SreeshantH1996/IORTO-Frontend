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
        
        <div style="text-align:center;padding:15%;">
          <h3> <b>Please proceed with the paymeny procedures.</b></h3>
          <span style="font-size:30px;">
            Totoal amount : <b>₹ 100 /-</b>
          </span><br>
          <span style="color:red;">**All payment proceudres are security encrypted, RTO-OLVS</span><br>

          <span >
          <button class="btn btn-lg btn-primary" style="margin-top:3%;" v-on:click="payMoney()">Pay Now</button>
          <a href="/#/userhome">
            <button class="btn btn-lg btn-primary" style="margin-top:3%;margin-left:2%;">Cancel</button>
          </a>
          </span>
        </div>
      </div>
    </div>  
  </div>
</template>    
<style scoped src="../css/Payment.css"></style>
<script lang="ts" src="../ts/Payment.ts"></script>