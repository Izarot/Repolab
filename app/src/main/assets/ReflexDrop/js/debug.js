function giveCoins(n){

loadData();

RD.coins += n;
saveData();

alert("Debug: +" + n + " coins");
}

function wipeSave(){

localStorage.removeItem("reflexdrop_save");

alert("Save wiped.");
location.reload();
}

function maxStats(){

loadData();

RD.coins = 9999;
RD.bestScore = 999;
RD.bestCombo = 99;
RD.games = 999;
RD.chapter = 3;
RD.inventory = [
"Default",
"Inferno",
"Ultra",
"Void"
];

saveData();

alert("Debug max stats applied.");
}
