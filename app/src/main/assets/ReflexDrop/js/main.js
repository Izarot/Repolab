window.onload = ()=>{

loadData();

document.body.className = RD.theme;

updateHome();

if(RD.user){
showHome();
}else{
showLogin();
}
};

function goPage(name){
location.href = name;
}

function showLogin(){
showOnly("loginScreen");
}

function showHome(){
showOnly("homeScreen");
}

function showGame(){
showOnly("gameScreen");
}

function showOnly(id){

document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});

let el = document.getElementById(id);

if(el) el.classList.add("active");
}

function updateHome(){

let c = document.getElementById("coinCount");
let s = document.getElementById("bestScore");
let b = document.getElementById("bestCombo");
let w = document.getElementById("welcomeText");

if(c) c.innerText = RD.coins;
if(s) s.innerText = RD.bestScore;
if(b) b.innerText = RD.bestCombo;
if(w) w.innerText = "Welcome, " + RD.user;
}