let run = {
live:false,
score:0,
combo:0,
bestCombo:0,
lives:5,
spawnLoop:null
};

function startGame(){

run.live = true;
run.score = 0;
run.combo = 0;
run.bestCombo = 0;
run.lives = 5;

showGame();
updateHUD();

let arena = document.getElementById("arena");
arena.innerHTML = "";

clearInterval(run.spawnLoop);
run.spawnLoop = setInterval(spawnShape, 850);
}

function spawnShape(){

if(!run.live) return;

let arena = document.getElementById("arena");

let type = randType();
let el = document.createElement("div");

el.className = "shape " + type;

if(type === "square"){
el.style.background = "#00ff9d";
el.style.color = "#00ff9d";
}

if(type === "circle"){
el.style.background = "#ff4d6d";
el.style.color = "#ff4d6d";
}

if(type === "triangle"){
el.style.borderBottomColor = "#b06cff";
}

let x = Math.random() * (arena.clientWidth - 60);
let y = -70;
let speed = 2 + Math.random()*3;

el.style.left = x + "px";
el.style.top = y + "px";

arena.appendChild(el);

el.onclick = ()=>hitShape(el,type,x,y);

let fall = setInterval(()=>{

if(!run.live || !document.body.contains(el)){
clearInterval(fall);
return;
}

y += speed;
el.style.top = y + "px";

if(y > arena.clientHeight){
clearInterval(fall);
if(document.body.contains(el)) el.remove();

run.combo = 0;
run.lives--;
updateHUD();

if(run.lives <= 0){
endRun();
}
}

},16);
}

function hitShape(el,type,x,y){

if(!run.live) return;

let pts = points(type);

run.score += pts;
run.combo++;

if(run.combo > run.bestCombo){
run.bestCombo = run.combo;
}

floatText("+"+pts,x,y);

el.remove();
updateHUD();
}

function points(type){
if(type === "circle") return 20;
if(type === "triangle") return 3;
return 4;
}

function randType(){

let r = Math.random();

if(r < .33) return "circle";
if(r < .66) return "triangle";
return "square";
}

function updateHUD(){

let a = document.getElementById("liveScore");
let b = document.getElementById("liveCombo");
let c = document.getElementById("liveLives");

if(a) a.innerText = run.score;
if(b) b.innerText = run.combo;
if(c) c.innerText = run.lives;
}

function endRun(){

run.live = false;
clearInterval(run.spawnLoop);

RD.games++;
RD.coins += run.bestCombo;

if(run.score > RD.bestScore){
RD.bestScore = run.score;
}

if(run.bestCombo > RD.bestCombo){
RD.bestCombo = run.bestCombo;
}

saveData();
updateHome();

alert(
"Run Over!\n" +
"Best Combo: x" + run.bestCombo +
"\nCoins Gained: +" + run.bestCombo
);

showHome();
}