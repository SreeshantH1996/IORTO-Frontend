<template>
  <div id="app" style="backgroud-image=url('')">
    <div id="header" v-if="UserLoggedInFlag">
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
          <!-- <button class="btn-sm btn-primary" style="margin-right: 4px">
            Edit Profile
          </button> -->
          <button v-on:click="LogOut()" class="btn-sm btn-primary">
            Logout
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-6" style="text-align: left">
          <span style="font-size: 18px; color: black">
            Associated with RTO, Kerala
          </span>
        </div>
        <div class="col-6" style="text-align: right">
          <span style="test-align: right; font-size: 18px; color: black"
            >Welcome, <b>{{UserName}}</b></span
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" src="../src/App.ts"></script>
<style>
#header {
  padding: 8px;
  background-color: #888586;
}
body {
  overflow: hidden !important;
  background-color: #d2d2d2;
  /* background: url("http://localhost:8000/static/Images/bg.jpg"); */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>

