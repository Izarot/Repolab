let score = 0;
let combo = 0;
let bestCombo = 0;
let lives = 5;
let running = false;
let spawnLoop = null;

const arena = document.getElementById("arena");

function startGame(){
score = 0;
combo = 0;
bestCombo = 0;
lives = 5;
running = true;

document.getElementById("menu").style.display = "none";
document.getElementById("gameOver").classList.add("hidden");

arena.innerHTML = "";

updateHUD();

clearInterval(spawnLoop);
spawnLoop = setInterval(spawnShape, 850);
}

function updateHUD(){
document.getElementById("score").innerText = score;
document.getElementById("combo").innerText = combo;
updateCoins();
}

function rand(min,max){
return Math.random()*(max-min)+min;
}

function spawnShape(){
if(!running) return;

let typeRoll = Math.random();
let type = "square";

if(typeRoll < .33) type = "circle";
else if(typeRoll < .66) type = "triangle";

let el = document.createElement("div");
el.className = "shape " + type;

if(type === "square"){
el.style.background = "#00ff95";
el.style.color = "#00ff95";
}

if(type === "circle"){
el.style.background = "#ff4d6d";
el.style.color = "#ff4d6d";
}

let x = rand(10, arena.clientWidth - 70);
let y = -70;
let speed = rand(2.5,5);

el.style.left = x + "px";
el.style.top = y + "px";

arena.appendChild(el);

el.onclick = ()=>{
if(!running) return;

score += points(type);
combo++;

if(combo > bestCombo) bestCombo = combo;

showFloat("+" + points(type), x, y);
el.remove();

updateHUD();
};

let fall = setInterval(()=>{

if(!document.body.contains(el)){
clearInterval(fall);
return;
}

y += speed;
el.style.top = y + "px";

if(y > arena.clientHeight){
clearInterval(fall);

if(document.body.contains(el)) el.remove();

combo = 0;
lives--;

updateHUD();

if(lives <= 0){
endGame();
}
}

},16);
}

function points(type){
if(type === "circle") return 20;
if(type === "triangle") return 3;
return 4;
}

function endGame(){
running = false;
clearInterval(spawnLoop);

coins += bestCombo;
saveCoins();

document.getElementById("summary").innerText =
"Best Combo x" + bestCombo + " = +" + bestCombo + " coins";

document.getElementById("gameOver").classList.remove("hidden");

updateCoins();
}

function showFloat(txt,x,y){
let f = document.createElement("div");
f.className = "floatText";
f.innerText = txt;
f.style.left = x + "px";
f.style.top = y + "px";
f.style.color = "#00ff95";

arena.appendChild(f);

setTimeout(()=>f.remove(),700);
}
