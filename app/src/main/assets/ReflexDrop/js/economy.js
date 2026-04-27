function addCoins(amount){
coins += amount;
if(coins < 0) coins = 0;
saveCoins();
updateCoins();
}

function spendCoins(amount){
if(coins >= amount){
coins -= amount;
saveCoins();
updateCoins();
return true;
}
return false;
}

function rewardRun(){
addCoins(bestCombo);
return bestCombo;
}

function comboBonus(){
if(bestCombo >= 100) return 50;
if(bestCombo >= 50) return 20;
if(bestCombo >= 25) return 10;
return 0;
}
