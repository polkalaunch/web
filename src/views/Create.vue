<template>
    <div class="create" style="padding: 40px;">
        <h1><b>Create Auction</b></h1>
        <hr>
        <div class="row">
        <div class="col-sm-5 mt-3"> 
        <div class="card card-background px-4 pb-4 pt-3">
        <p><b>Enter Your ERC 20 token address</b></p>
        <input type="text" class="form-control input-token" placeholder="Token address">
    </div>
    </div>
    <div class="col-sm mt-3" id="card-form"> 
        <div class="card px-4 pb-4 pt-3">

           <p class="mt-3"><img src="../assets/Polkadot.png" width="40px">Polkadot
           <span style="float:right">0x423452512351235</span>
           </p>
            
        <b>Buyer Participants with</b>
       
 <div class="form-group row">
   <label for="tokenselect" class="col col-form-label">Polkadot /</label>
   <select class="form-select" id="tokenselect" style="width:120px">
        <option>ETH</option>
        <option>POL</option>
        <option>DAI</option>
        </select>
   
</div>

<center>
<p class="mt-1">
<b>Presale creator</b> <br>
<span class="pink-text">0x109a00001241241c48</span></p></center>

<b>How Many Dot for sale?</b>
 <div class="card card-create p-3 mb-3">
 <div class="row">
                 <div class="col">
                    <p style="float:right;color:grey;">Balance : 0</p>
                  </div>
                </div>
          <div class="input-group">
  <input type="text" class="form-control border-0" style="background:none;color: #2c3e50;" placeholder="0.0" >
  <span class="input-group-text border-0" style="background:none;color: #2c3e50;"><b>
      DOT</b></span>
</div>
</div>
<div class="row">
<div class="col-sm-5">
<b>Softcap</b> 
 <div class="card card-create p-1" >
     <div class="input-group">
  <input type="text" class="form-control border-0" style="background:none;color: #2c3e50;" placeholder="0.0" >
  <span class="input-group-text border-0" style="background:none;color: #2c3e50;"><b>
      DOT</b></span>
</div>
</div>


<b>Hardcap</b>
<div class="card card-create p-1" >
    <div class="input-group">
  <input type="text" class="form-control border-0" style="background:none;color: #2c3e50;" placeholder="0.0" >
  <span class="input-group-text border-0" style="background:none;color: #2c3e50;"><b>
      DOT</b></span>
</div>
     </div>
     <span style="color:red">Error Validation</span> 
     </div>
     <div class="col mt-4" style="margin-left:40px">
   <p>
    <b>Presale rate</b><br>
    <span class="pink-text">1 ETH = 0 FLIP</span><br>
    <b>Uniswap listing rate</b><br>
      <span class="pink-text">1 ETH = 0 FLIP</span>
      <ul class="nav nav-pills mt-1" style="margin-left:-20px"  id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" style="width:62px" data-bs-toggle="pill" href="" role="tab"  aria-selected="true">0%</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" data-bs-toggle="pill" href="" role="tab" aria-selected="false">10%</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link"  data-bs-toggle="pill" href="" role="tab" aria-selected="false">25%</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link"  data-bs-toggle="pill" href="" role="tab" aria-selected="false">30%</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link"  data-bs-toggle="pill" href="" role="tab" aria-selected="false">50%</a>
  </li>
</ul>
      </p>
</div>
</div>

    <hr>
<div class="row" style="grid-row-gap:30px;">
    <div class="col-lg">
     <b class="mt-2">Percent of raised ETH used for liquidity</b>
     <div style="width:100%">
     <center class="pink-text" style="font-size:24px">100%</center>
    <div class="row">
       <div class="col-1 range-xtra">
     <i class="fas fa-minus" ></i>
     </div>
       <div class="col-10">
     <input type="range" style="width:100%" class="form-range" min="0" max="100">
     </div>
       <div class="col-1">
     <i class="fas fa-plus"></i>
     </div>
     </div>
     </div>
    </div>
    <div class="col">
        <div class="card card-background2 p-2 mb-2">
    <p style="margin-left:10px">Additional tokens required for liquidity if hardcap is met <br>
    <img src="../assets/Polkadot.png" width="40px">0 DOT </p>
    </div>
    </div>
   </div>

    <hr>
    <b>Auction Prediction</b>
     <div style="width:100%">
     <center class="pink-text" style="font-size:24px">0 ETH</center>
     <div class="row">
       <div class="col-1 range-xtra">
     <i class="fas fa-minus" ></i>
     </div>
       <div class="col-10">
     <input type="range" style="width:100%" class="form-range" min="0" max="100">
     </div>
       <div class="col-1">
     <i class="fas fa-plus"></i>
     </div>
     </div>
     </div>
<div class="row mt-3">
<div class="col">
<b>Polkalaunch fee :</b> 
<p class="disable-text">0 DOT</p>
</div>
<div class="col">
<b>ETH liquidity :</b>
<p class="disable-text">0 DOT</p>
</div>
<div class="col">
<b>Your DOT :</b>
<p class="pink-text">0 DOT</p>
</div>
</div>
<div class="row">
    <div class="col">
<b>PolkaLaunch fee :</b>
<p class="disable-text">0 DOT</p>
</div>
<div class="col">
<b>FLIP liquidity :</b>
<p class="disable-text">0 DOT</p>
</div>
<div class="col">
<b>FLIP sold :</b>
<p class="disable-text">0 DOT</p>
</div>
</div>
<hr>
<div class="row">
<div class="col-sm">
<b>ETH limit per user</b>
<div class="card card-create p-1" >
     <div class="input-group">
  <input type="text" class="form-control border-0" style="background:none;color: #2c3e50;" placeholder="0.0" >
  <span class="input-group-text border-0" style="background:none;color: #2c3e50;"><b>
      DOT</b></span>
</div>
</div>
</div>
<div class="col">
<b>Lock Liquidity for</b>
 <select class="form-select border-0 mt-2" style="width:120px; background-color: rgb(240, 239, 239)">
  <option selected value="">1 month</option>
  <option value="">2 month</option>
  <option value="">3 month</option>
  <option value="">6 month</option>
  <option value="">1 year</option>
</select>
</div>
</div>
<div class="row mt-4">
    <div class="col-sm-6">
<b>Start Date</b>
        <div class="card card-background2 p-3">
<div class="row">
    <div class="col ml-auto" >
        <b>Thu 25 Feb 2021 11:59</b><br>
        <span>in 17 days</span><br>
        <small>block 0</small><br>
        </div>
    <div class="col-sm-5">
        <button class="btn btn-pink"><i class="far fa-calendar-alt"></i></button>
        <button class="btn btn-pink" style="margin-left:26px"><i class="fas fa-cube"></i></button>
        </div>
        </div>
        </div>
        </div>
        <div class="col">
<b>End Date</b>
<div class="card card-background2 p-3">
<div class="row">
    <div class="col ml-auto" >
        <b>Thu 25 Feb 2021 11:59</b><br>
        <span >in 17 days</span><br>
        <small>block 0</small><br>
        </div>
    <div class="col-sm-5">
        <button class="btn btn-pink"><i class="far fa-calendar-alt"></i></button>
        <button class="btn btn-pink" style="margin-left:26px"><i class="fas fa-cube"></i></button>
        </div>
        </div>
        </div>
        </div>
        </div>
<hr>
<center>
<p><b>Fees</b> <br>
0.3 ETH - Presale & Locking fee <br>
1.8% - ETH raised fee  <br>
1.8% - FLIP sold fee <br>
PolkaLaunch locking fee 
</p>
</center>
<p>
<b>Tokenomics</b>
<br>
<br>
<br>
</p>

<p>

<b>Total FLIP required</b><br>
<span class="pink-text">0 FLIP</span><br>
Amount for sale: 0<br>
Amount for liquidity: 0<br>
Fees: 0 <br>
</p>

<hr>
<div style="margin-left:auto">
        <button style="background: #ff3465;color:white;" class="btn btn text-mobile">Approve</button>
        <button style="margin-left:20px;background: #ff3465;color:white;" class="btn btn text-mobile">Create Auction</button>
</div>
    </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
.input-token{
    border: none;
    border-radius: 15px;
    background-color: rgb(240, 239, 239);
      color: #2c3e50;
}
.card-auction{
    border-radius: 10px;
    width: 400px;
}
.card-create{
    border: none;
    border-radius:10px;
    background-color: rgb(240, 239, 239);
}
.pink-text{
 color: #ff3465;
}
.disable-text{
    color: #a3a3a3;
}
.nav-item .active{
	background: #ff3465;
}
.btn-pink{
background: #ff3465;
color: white;
}
.card-background{
 color: white;
   text-shadow: 2px 2px 8px  #000000;
background-image:url('../assets/card-back.png');
 box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.2);
}
.card-background2{
 color: white;
     border-radius:10px;
   text-shadow: 2px 2px 8px  #000000;
background-image:url('../assets/card-back.png');
 box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.2);
}
.text-mobile{
font-size:24px
}
@media (max-width: 768px) { 
.text-mobile{
font-size:12px;
}
  }
  @media (max-width: 575.98px) { 
.range-xtra{
  margin-left:-10px;
}
  }

</style>