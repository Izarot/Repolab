function floatText(txt,x,y){

let arena = document.getElementById("arena");
if(!arena) return;

let f = document.createElement("div");

f.className = "floatText";
f.innerText = txt;
f.style.left = x + "px";
f.style.top = y + "px";
f.style.color = "#00ff9d";

arena.appendChild(f);

setTimeout(()=>{
f.remove();
},700);
}

function vibrate(ms){
if(RD.vibration && navigator.vibrate){
navigator.vibrate(ms);
}
}

function clickFx(){
vibrate(40);
}
