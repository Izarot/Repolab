window.onload = () => {

loadData();

document.body.className = RD.theme;

updateHome();

if (RD.user) {
showHome();
} else {
showLogin();
}

};

function goPage(name) {

window.location.href =
"file:///android_asset/ReflexDrop/html/" + name;

}

function showLogin() {
showOnly("loginScreen");
}

function showHome() {
showOnly("homeScreen");
updateHome();
}

function showGame() {
showOnly("gameScreen");
}

function showOnly(id) {

document.querySelectorAll(".screen").forEach(screen => {
screen.classList.remove("active");
});

let el = document.getElementById(id);

if (el) {
el.classList.add("active");
}

}

function updateHome() {

let c = document.getElementById("coinCount");
let s = document.getElementById("bestScore");
let b = document.getElementById("bestCombo");
let w = document.getElementById("welcomeText");

if (c) c.innerText = RD.coins || 0;
if (s) s.innerText = RD.bestScore || 0;
if (b) b.innerText = RD.bestCombo || 0;

if (w) {
if (RD.user) {
w.innerText = "Welcome, " + RD.user;
} else {
w.innerText = "Welcome";
}
}

}