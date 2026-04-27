let RD = {};

function loadData(){
RD = JSON.parse(localStorage.getItem("reflexdrop_save") || "{}");

if(!RD.user) RD.user = "";
if(!RD.coins) RD.coins = 0;
if(!RD.bestScore) RD.bestScore = 0;
if(!RD.bestCombo) RD.bestCombo = 0;
if(!RD.games) RD.games = 0;
if(!RD.theme) RD.theme = "theme-neon";
if(!RD.inventory) RD.inventory = ["Default"];
}

function saveData(){
localStorage.setItem("reflexdrop_save", JSON.stringify(RD));
}
