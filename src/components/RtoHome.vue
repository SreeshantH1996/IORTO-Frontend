<template>
  <div>
    <div class="cont">
      <div class="row" id="rowinside">
        <div class="col-4">
          <div class="card" style="width: 18rem;height: 18rem">
            <div class="card-body">
              <h3 class="card-title">User List</h3>
              <p>
                  All users registered in the <b>RTO-OLVS</b> will be displayed.
              </p>
              <a href="/#/userlist" class="card-link"
                ><button class="btn btn-sm">Click here</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem;height: 18rem;">
            <div class="card-body">
              <h3 class="card-title">Licence Renewal Applications</h3>
              <p>
                  All new Licence renewal application on <b>RTO-OLVS</b> will be displayed.
              </p>
              <a href="/#/renewallist" class="card-link"
                ><button class="btn btn-sm">Click here</button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card" style="width: 18rem;height: 18rem">
            <div class="card-body">
              <h3 class="card-title">New Licence Applications</h3>
              <p>
                  All new Licence<br> application on <b>RTO-OLVS</b> will be displayed.
              </p>
              <a href="/#/document_list" class="card-link"
                ><button class="btn btn-sm">Click here</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/RtoHome.ts"></script>
<style scoped src="../css/RtoHome.css"></style>