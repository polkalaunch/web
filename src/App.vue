<template>
  <div id="app">
  <!-- Modal -->
<div class="modal fade" id="modalConnect" tabindex="100" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog modal-dialog-centered" >
    <div class="modal-content border-0" style="border-radius:16px">
      <div class="modal-header modal-header-wallet">
        <h5 class="modal-title" id="exampleModalLabel">Connect to a Wallet</h5>
        <button type="button" class="btn-close btn-close-white fs-6 close-style" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="d-grid gap-2">
        <button class="btn btn-outline text-start" style="border-color:#ff3465;" >
        <span style='font-size: 20px;color: #2c3e50;font-weight:600'>
        <img src="./assets/Metamask.png" style="width:32px;">
      Metamask</span>
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Polkalaunch</a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
         <router-link class="nav-link" :class="{ 'active-nav': this.$router.currentRoute.name == 'Home' }" to="/">Token Sales</router-link>
        </li>
          <li class="nav-item">
          <router-link  class="nav-link" :class="{ 'active-nav': this.$router.currentRoute.name == 'Swap' }" to="/swap">Swap</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" :class="{ 'active-nav': this.$router.currentRoute.name == 'Earning' }" to="/earning">Earning</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" :class="{ 'active-nav': this.$router.currentRoute.name == 'Governance' }" to="/governance">Governance</router-link>
        </li>
      </ul>
           <ul class="navbar-nav">
            <li class="nav-item">
               <button type="button" id="connectwallet"  data-bs-toggle="modal" data-bs-target="#modalConnect" class="btn btn-outline">Connect Wallet</button>
            </li>
        </ul>
    </div>
  </div>
</nav>

    <router-view/>

     <footer class="footer">
       <div class="row" style="padding: 40px;">
        <hr>
       <div class="col-sm-3 mt-4">
       <b>Polkalaunch</b>
       <p>&copy; PolkaLaunch 2021</p> 
       </div>
        <div class="col mt-4">
         <b>Social</b>
         <p style="line-height: 1.7;">
         <a href="//t.me/polkalaunch" target="_blank"><i class="fab fa-telegram"></i> Telegram</a><br>
         <a href="//polkalaunch.io"><i class="fab fa-twitter"></i> Twitter</a><br>
         <a href="//polkalaunch.io"><i class="fab fa-medium"></i> Medium</a><br>
         </p>
        </div>
         <!-- <div class="col mt-4">
         <b>Help</b>
         <p style="line-height: 1.7;">
         <a href="">Support</a><br>
         <a href="">Terms</a><br>
         <a href="">Privacy</a><br>
         </p>
        </div> -->
        <div class="col mt-4">
         <b>Company</b>
         <p style="line-height: 1.7;">
         <a href="//polkalaunch.io">About us</a>
         </p>
        </div>
        <!-- <div class="col mt-4">
         <b>Developers</b>
         <p style="line-height: 1.7;">
         <a href="">Documentation</a>
         </p>
        </div> -->
       </div>
       </footer>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
font-family: 'Catamaran', sans-serif;
font-size: 20px;
overflow-x: hidden;
}
body{
   background-color:#f7f7f7;
}
nav {
  padding: 30px;
   background-color:white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#connectwallet{
border-color:#ff3465;
color: #ff3465;
}
#connectwallet:hover{
background:#ff3465;
color: white;
}
.active-nav{
border-bottom: 2px solid #ff3465;
}
hr{
  background:#ff3465;
}
.modal-header-wallet{
   background:#ff3465;
   color: #f7f7f7;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.btn:focus , .close-style:focus {
    outline: 0 !important;
    border-color: initial;
    box-shadow: none;
}
a{
  text-decoration: none;
   color: #2c3e50;
}
</style>
