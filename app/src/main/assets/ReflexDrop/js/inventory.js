window.onload = ()=>{

loadData();

document.body.className = RD.theme;

let box = document.getElementById("inventoryList");

if(!box) return;

box.innerHTML = "";

RD.inventory.forEach(item=>{

let row = document.createElement("div");
row.className = "rowLine";

row.innerHTML =
"<span>" + item + "</span>" +
"<button class='btn smallBtn'>EQUIP</button>";

row.querySelector("button").onclick = ()=>{
equipItem(item);
};

box.appendChild(row);

});
};

function equipItem(item){

if(item === "Inferno"){
RD.theme = "theme-inferno";
}

else if(item === "Ultra"){
RD.theme = "theme-ultra";
}

else{
RD.theme = "theme-neon";
}

saveData();

alert(item + " equipped!");
}