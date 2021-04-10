<template>
  <div id="app">

    <router-view />
  </div>
  
</template>

<style>
#header{
    padding: 1%;
    background-color: #545454;
}  
body{
  overflow: hidden !important;
  background-color: #d0d0d0;
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
@import'~bootstrap/dist/css/bootstrap.css'
</style>
