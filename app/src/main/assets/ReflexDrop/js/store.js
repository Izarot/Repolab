function buyItem(name,cost){

loadData();

if(RD.coins < cost){
alert("Not enough coins.");
return;
}

if(!RD.inventory){
RD.inventory = ["Default"];
}

if(RD.inventory.includes(name)){
alert("Already owned.");
return;
}

RD.coins -= cost;
RD.inventory.push(name);

saveData();

alert(name + " purchased!");
location.reload();
}