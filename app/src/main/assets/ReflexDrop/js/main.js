let coins = Number(localStorage.getItem("rd_coins") || 0);

function saveCoins(){
localStorage.setItem("rd_coins", coins);
}

function updateCoins(){
document.getElementById("coins").innerText = coins;
}

function openStory(){
alert("Story Mode arriving next phase 👑");
}

function openInventory(){
alert("Inventory arriving next phase 🎒");
}

function openAchievements(){
alert("Achievements arriving next phase 🏆");
}

function openStore(){
alert("Store arriving next phase 🛒");
}

function backMenu(){
document.getElementById("gameOver").classList.add("hidden");
document.getElementById("menu").style.display = "flex";
}

window.onload = ()=>{
updateCoins();
};
