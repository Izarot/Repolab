window.onload = ()=>{

loadData();

document.body.className = RD.theme;

set("sGames", RD.games);
set("sBest", RD.bestScore);
set("sCombo", RD.bestCombo);
set("sCoins", RD.coins);
};

function set(id,val){

let el = document.getElementById(id);

if(el){
el.innerText = val;
}
}
