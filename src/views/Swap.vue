<template>
  <div class="swap" style="padding: 40px;">
    <h1 style="font-weight:bold">Swap</h1>
                                <hr/>
         <div class="card mx-auto p-5 m-size">                       
         <div class="card card-mini mb-3 px-3 pt-3" style="line-height: 1;font-size: 1rem;">
           <p>Rate<span style="float:right;">1 ETH</span></p>
           <p>Inverse Rate<span style="float:right;">1 ETH</span></p>
           <p class="para-colap"  aria-expanded="false" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" >
    Estimated Fee <i class="fas fa-chevron-down"></i><i class="fas fa-chevron-up"></i><span style="float:right;">1 ETH</span></p>
 <div class="collapse" id="collapseExample">
  <p>Ethereum Network Fee : <span style="float:right;">0.000000</span></p>
</div>
  
         </div>
        <div>
              <div class="row">
               <div class="col">
                 <h5><img src="../assets/Polkadot.png" style="width:40px;height:40px;">Polkadot</h5>
                  </div>
                 <div class="col">
                    <p style="float:right;color:grey;">Balance : 0</p>
                  </div>
                </div>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="0.0" aria-describedby="button-addon2">
  <button class="btn btn-outline-success" type="button" id="button-addon2">Max</button>
</div>
</div>
<center><i class="fas fa-angle-double-down"></i></center>
             <div style="margin-top:10px;border-width:3px !important;">
              <div class="row">
              <div class="col">
              <h5><img src="../assets/Polkadot.png" style="width:40px;height:40px;">Polkalaunch</h5>
                </div>
              <div class="col">
              <p style="float:right;color:grey;">Balance : 0</p>
               </div>
                    </div>
                     <input class="form-control" placeholder="0.0">
                     </div>

                   <center style="margin-top:10px">
                   <div class="row">
                   <div class="col">
                      <button class="btn ripple btn-outline btn-lg" id="btnBuy">Buy</button>
                            </div>
        
               </div>
         </center>
         </div>
          </div>
</template>
<style>
#btnBuy{
float:left;
width:100%;
border-color:#ff3465;
color:#ff3465;
position: relative;
border-radius: 10px;

cursor: pointer;
}
#btnBuy:hover{
background-color:#ff3465;
color:white;
}

.form-control:focus{
  outline: 0 !important;
  border-color: #ff3465;
  box-shadow: none;
}
.ripple {
  background-position: center;
  transition: background 0.8s;
}
.ripple:hover {
  background: #ff3465 radial-gradient(circle, transparent 1%, #a82342 1%) center/15000%;
}
.ripple:active {
  background-color: #a82342;
  background-size: 100%;
  transition: background 0s;
}
.card{
border-radius: 25px;
border-color:#ff3465;
}
.card-mini{
    color: white;
   text-shadow: 2px 2px 8px  #000000;
background-image:url('../assets/card-back.png');
 box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.2);
}
.para-colap[aria-expanded=true] .fa-chevron-down{
   display: none;
}
.para-colap[aria-expanded=false] .fa-chevron-up {
   display: none;
}
.m-size{
  width:470px;
}
@media (max-width: 768px) { 
 .m-size{
  width: 100%;
}

  }
</style>


