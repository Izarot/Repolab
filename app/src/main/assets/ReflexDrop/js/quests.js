window.onload = ()=>{

loadData();

document.body.className = RD.theme;

let box = document.getElementById("questList");

if(!box) return;

box.innerHTML = "";

makeQuest("Play 3 Games", RD.games, 3, 25);
makeQuest("Reach 100 Score", RD.bestScore, 100, 40);
makeQuest("Reach Combo x20", RD.bestCombo, 20, 35);

function makeQuest(name,val,goal,reward){

let done = val >= goal;

let row = document.createElement("div");
row.className = "rowLine";

row.innerHTML =
"<span>" + name + "</span>" +
"<button class='btn smallBtn'>" +
(done ? "CLAIM" : val + "/" + goal) +
"</button>";

let btn = row.querySelector("button");

if(done){
btn.onclick = ()=>claimQuest(reward,btn);
}else{
btn.disabled = true;
}

box.appendChild(row);
}
};

function claimQuest(reward,btn){

RD.coins += reward;
saveData();

btn.innerText = "DONE";
btn.disabled = true;

alert("+" + reward + " coins");
}
