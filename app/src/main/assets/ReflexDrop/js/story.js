window.onload = ()=>{

loadData();

document.body.className = RD.theme;
renderStory();
};

function renderStory(){

let box = document.getElementById("storyBox");
if(!box) return;

let chapter = RD.chapter || 1;

box.innerHTML = "";

for(let i=1;i<=3;i++){

let card = document.createElement("div");
card.className = "chapter card";

let unlocked = i <= chapter;

card.innerHTML =
"<h3>Chapter " + i + "</h3>" +
"<p>" + chapterName(i) + "</p>" +
"<button class='btn'>" +
(unlocked ? "PLAY" : "LOCKED") +
"</button>";

let btn = card.querySelector("button");

if(unlocked){
btn.onclick = ()=>startChapter(i);
}else{
btn.disabled = true;
}

box.appendChild(card);
}

let boss = document.createElement("div");
boss.className = "bossCard";

boss.innerHTML =
"<div class='bossName'>Square Tyrant</div>" +
"<p>Defeat after Chapter 3</p>" +
"<button class='btn ghost'>FIGHT</button>";

boss.querySelector("button").onclick = ()=>startBoss();

box.appendChild(boss);
}

function chapterName(n){

if(n===1) return "Neon Plains";
if(n===2) return "Crimson Orbit";
return "Void Grid";
}

function startChapter(n){

alert("Launching Chapter " + n);
location.href = "index.html";
}

function startBoss(){

alert("Boss Battle Soon 😏");
}