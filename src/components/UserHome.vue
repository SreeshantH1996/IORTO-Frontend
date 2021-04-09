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
              <a href="#" class="card-link">Click here</a>
            </div>
          </div>
        </div>
      </div>

      <!-- ABOUT START -->
      <div>
          <h1>About </h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/UserHome.ts"></script>
<style scoped src="../css/UserHome.css"></style>