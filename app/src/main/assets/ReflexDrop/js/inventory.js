let inventory =
JSON.parse(
localStorage.getItem("rd_inventory") ||
'["Default Skin"]'
);

let equippedSkin =
localStorage.getItem("rd_skin") ||
"Default Skin";

const shopItems = [

{name:"Neon Skin",price:40},
{name:"Inferno Skin",price:80},
{name:"Ultra Skin",price:140},
{name:"Revive Token",price:120},
{name:"Slow Time",price:90}

];

function saveInventory(){

localStorage.setItem(
"rd_inventory",
JSON.stringify(inventory)
);

localStorage.setItem(
"rd_skin",
equippedSkin
);
}

function ownsItem(name){
return inventory.includes(name);
}

function buyItem(name,price){

if(ownsItem(name)){
alert(name + " already owned.");
return;
}

if(!spendCoins(price)){
alert("Not enough coins.");
return;
}

inventory.push(name);
saveInventory();

alert(name + " purchased ⚡");
}

function equipSkin(name){

if(!ownsItem(name)){
alert("You don't own " + name);
return;
}

equippedSkin = name;

saveInventory();
applySkin();

alert(name + " equipped 👑");
}

function applySkin(){

document.body.classList.remove(
"skin-neon",
"skin-inferno",
"skin-ultra"
);

if(equippedSkin === "Neon Skin"){
document.body.classList.add("skin-neon");
}

if(equippedSkin === "Inferno Skin"){
document.body.classList.add("skin-inferno");
}

if(equippedSkin === "Ultra Skin"){
document.body.classList.add("skin-ultra");
}
}