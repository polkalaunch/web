<template>
    <div class="auction" style="padding: 40px;">
<h3>Fixed-Swap</h3>
<div class="row" style="grid-row-gap: 30px;"> 
<div class="col-sm"> 
<div class="card" >
<div class="row"> 
<img src="../../assets/Polkadot.png" class="img-m" >
<div class="col mt-3">
Polkadot
<p>
<span class="btn sub-text">Etherscan <i class="fas fa-link"></i></span> 
<span class="btn sub-text">0x14141...235 <i class="far fa-copy"></i></span>
<span class="btn sub-text">Website <i class="fas fa-link"></i></span>
</p>
</div>
</div>
<div class="px-4 pb-4">
<hr>
<div class="row">
	<div class="col">
<b>Fixed Swap Ratio</b> <br>
<span>1 ETH = 415 Polka</span>
</div>
<div class="col">
<b>Price</b> <br>
<span>$ 3.910273</span>
</div>
</div>
<b>Maximum Allocation per wallet</b><br>
5 ETH
<center><span style="color:#ff3465;">150</span>/150 ETH</center>
<div class="progress" style="height: 20px;">
  <div class="progress-bar" role="progressbar" style="width: 25% ;background: #ff3465;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
</div>

</div>
</div>

<div class="col"> 
<div class="card px-5 py-4">
<h3><b>Join The Pool</b></h3>
<center>
<h5 class="m-text">Time Remaining = 0d : 12h : 22m : 10s</h5>
</center>
Your Bid Amount
 <div class="row">
               <div class="col">
                 <h5><img src="../../assets/Polkadot.png" style="width:40px;height:40px;">Polkadot</h5>
                  </div>
                 <div class="col">
                    <p style="float:right;color:grey;">Balance : 0</p>
                  </div>
                </div>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="0.0" aria-describedby="button-addon2">
  <button class="btn btn-outline-success" type="button" id="button-addon2">Max</button>
</div>
<button class="btn btn-dark mt-4">Go</button>
</div>
</div>
</div>

	<div class="mt-5">
	
		
		<ul class="nav nav-pills mx-auto" id="pills-tab" style="width:211px" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" data-bs-toggle="pill" href="#pills-info" role="tab"  aria-selected="true">Info</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link"  data-bs-toggle="pill" href="#pills-chat" role="tab" aria-selected="false"><i class="far fa-comments"></i> 1</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link"  data-bs-toggle="pill" href="#pills-audit" role="tab" aria-controls="pills-contact" aria-selected="false">Audit</a>
  </li>
</ul>
<hr>
<div class="card p-3">
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-info" >1</div>
  <div class="tab-pane fade" id="pills-chat" role="tabpanel" >2</div>
  <div class="tab-pane fade" id="pills-audit" role="tabpanel" >3</div>
</div>
</div>
	</div>

    </div>
</template>
<style scoped>
.sub-text{
color: #757575;
}
.nav-link{
color: #2c3e50;
}
.nav-item .active{
	background: #ff3465;
}
.img-m{
  width:120px;
}
@media (max-width: 768px) { 
.img-m{
width: 150px;
height:120px;
margin-right: -30px;
}
.m-text{
  font-size: 10px;
}
}
</style>