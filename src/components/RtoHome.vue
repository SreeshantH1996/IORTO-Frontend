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
                ><button style="margin-top: 25%;" class="btn btn-sm">Click here</button>
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
              <a href="/#/newapplicationlist" class="card-link"
                ><button class="btn btn-sm">Click here</button>
              </a>
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
<script lang="ts" src="../ts/RtoHome.ts"></script>
<style scoped src="../css/RtoHome.css"></style>