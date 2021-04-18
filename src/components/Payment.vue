<template>
  <div>
    <div class="cont">
      <div style="margin: 7%; text-align: left; margin-bottom: 13%">
        
        <div style="text-align:center;padding:15%;">
          <h3> <b>Please proceed with the paymeny procedures.</b></h3>
          <span style="font-size:30px;">
            Totoal amount : <b>₹ 100 /-</b>
          </span><br>
          <span style="color:red;">**All payment proceudres are security encrypted, RTO-OLVS</span><br>

          <span >
          <button class="btn btn-sm btn-primary" style="margin-top:3%;" v-on:click="payMoney()">Pay Now</button>
          <a href="/#/userhome">
            <button class="btn btn-sm btn-primary" style="margin-top:3%;margin-left:2%;">Cancel</button>
          </a>
          </span><br>
          <div style="margin-top:5%;display:none;" id="completebutton">
            <b>Once Payment is completed successfully, <span style="color:red;" v-on:click="navigateToHome()">Please click here</span> </b>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>    
<style scoped src="../css/Payment.css"></style>
<script lang="ts" src="../ts/Payment.ts"></script>