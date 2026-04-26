let score = 0;
let lives = 5;
let running = false;

function startGame(){
  document.getElementById("start").style.display="none";
  running = true;
  loop();
  setInterval(spawnShape, 900);
}

function loop(){
  if(!running) return;
  requestAnimationFrame(loop);
}

function updateHUD(){
  scoreEl.textContent = score;
  livesEl.textContent = lives;
}

const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");
const game = document.getElementById("game");

function spawnShape(){
  if(!running) return;

  let types = ["circle","square","triangle"];
  let type = types[Math.floor(Math.random()*types.length)];

  let el = document.createElement("div");
  el.className = "shape " + type;
  el.style.left = Math.random()*(window.innerWidth-70)+"px";
  el.style.top = "-70px";

  let points = 1;

  if(type==="circle") points = 20;
  if(type==="square") points = 4;
  if(type==="triangle") points = Math.random()<0.5 ? 2 : 3;

  el.onclick = () => {
    score += points;
    updateHUD();
    el.remove();
  };

  game.appendChild(el);

  let y = -70;
  let speed = 2 + Math.random()*3;

  let fall = setInterval(()=>{
    y += speed;
    el.style.top = y + "px";

    if(y > window.innerHeight){
      clearInterval(fall);
      if(el.parentNode){
        el.remove();
        lives--;
        updateHUD();

        if(lives<=0){
          running=false;
          alert("Game Over! Score: " + score);
          location.reload();
        }
      }
    }
  },16);
}