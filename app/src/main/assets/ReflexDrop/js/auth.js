function loginUser(){

let u = document.getElementById("username").value.trim();
let p = document.getElementById("password").value.trim();

if(!u || !p){
alert("Enter username and password");
return;
}

RD.user = u;
saveData();

updateHome();
showHome();
}

function logoutUser(){

RD.user = "";
saveData();

showLogin();
}
