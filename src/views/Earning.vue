<template>
    <div class="earning" style="padding: 40px;">
         <h1 style="font-weight:bold">Your Earnings</h1>
                                <hr/>
        <div class="row" style="grid-row-gap: 30px;">
            <div class="col-sm-3">
        <div class="card p-3">
        Your Staking Reward Estimation
        <p style="margin-top:70px"><span style="font-weight:bold;font-size:50px;margin-right:5px">0</span>Pol</p>
        <button class="btn btn-outline" style="margin-top:83px">Claim</button>
        </div>
            </div>
            <div class="col-sm">
        <div class="card p-3">
        Estimated Apy
         <p style="margin-top:10px"><span style="font-weight:bold;font-size:50px;margin-right:5px">0</span>Pol</p>
        </div>
        <div class="card p-3 mt-3">
        Currently Staked
         <p style="margin-top:10px"><span style="font-weight:bold;font-size:50px;margin-right:5px">0</span>Pol</p>
        </div>
        </div>
         <div class="col-sm">
        <div class="card p-3">
        Your Balance
        <p style="margin-top:70px"><span style="font-weight:bold;font-size:50px;margin-right:5px">0</span>Pol</p>
        <button class="btn btn-outline" style="margin-top:83px">Stake</button>
        </div>
        </div>
         <div class="col-sm">
        <div class="card p-3">
        Your Staked
        <p style="margin-top:70px"><span style="font-weight:bold;font-size:50px;margin-right:5px">0</span>Pol</p>
        <button class="btn btn-outline" style="margin-top:83px">Unstake</button>
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>
.card{
 border-radius: 25px;
 border-color: #ff3465;
}
.btn{
background-color:#ff3465;
color: white;
}
.card{
  color: white;
   text-shadow: 2px 2px #000000;
  background-image:url('../assets/card-back.png');
 box-shadow:inset 0 0 0 2000px rgba(255, 255, 255, 0.2);
}
</style>