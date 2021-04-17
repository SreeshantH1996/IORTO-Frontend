<template>
  <div class="cont">
    <div style="margin: 7%;  margin-bottom: 13%padding:2%;" >
        <div style="margin:2%;padding:2%;" id="printscreen">
        <h2 style = "text-align: center;margin-bottom:4%;margin-top:2%;"><b>Application Status</b></h2>
        <div style="text-align:center;margin:top:2%;">
            <h3>Name : <b>{{UserDetials.name}}</b></h3><br>
            <h3>Address : <b>{{UserDetials.address}}</b></h3><br>
            <h3>Phone Number : <b>{{UserDetials.phnumber}}</b></h3><br>
            <h3>Amount : <b>₹ 100 /-</b></h3><br>
            <h3>Payment Status : <b><span style="color:green;">{{UserDetials.payment_status}}</span></b></h3><br>
            <h3>Application Status : <b>{{UserDetials.status}}</b></h3><br>
            <span v-if="UserDetials.status == 'Rejected' || UserDetials.status == 'Resubmit'" style="color:red">Reason : <b>{{UserDetials.reason}}</b></span>
        </div>
        </div>
        <a href="/#/userhome">
            <button class="btn btn-lg" style="margin-right:2%;">Cancel</button>
          </a>
          <a v-if="UserDetials.status == 'Resubmit'" href="/#/newlicence">
            <button class="btn btn-lg" style="margin-right:2%;">Edit Application</button>
          </a>
        <button v-on:click="printScreen()" class="btn btn-lg">Print Reciept</button>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/NewUserStatus.ts"></script>
<style scoped src="../css/UserStatus.css"></style>        