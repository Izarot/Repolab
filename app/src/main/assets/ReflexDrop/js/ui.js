function openInventory(){

let text =
"INVENTORY 🎒\n\n";

inventory.forEach(item=>{
text += "• " + item + "\n";
});

text +=
"\nEquipped: " + equippedSkin +
"\n\nType skin name to equip.";

let pick = prompt(text);

if(!pick) return;

equipSkin(pick.trim());
}

function openStore(){

let text =
"STORE 🛒\n\n";

shopItems.forEach((item,i)=>{

text +=
(i+1) + ". " +
item.name +
" - " +
item.price +
" coins\n";

});

text +=
"\nEnter number to buy.";

let pick = prompt(text);

if(!pick) return;

pick = Number(pick) - 1;

if(shopItems[pick]){

buyItem(
shopItems[pick].name,
shopItems[pick].price
);

}else{
alert("Invalid choice.");
}
}

function openAchievements(){

let badges = [];

if(bestCombo >= 10)
badges.push("🔥 Combo x10");

if(bestCombo >= 25)
badges.push("⚡ Combo x25");

if(bestCombo >= 50)
badges.push("👑 Combo x50");

if(coins >= 100)
badges.push("💰 100 Coins");

if(chapter >= 3)
badges.push("📖 Story Warrior");

if(chapter >= 5)
badges.push("🌌 Geometry Savior");

if(badges.length === 0){
badges.push("No badges yet...");
}

alert(
"ACHIEVEMENTS 🏆\n\n" +
badges.join("\n")
);
}

window.onload = ()=>{

updateCoins();
applySkin();
};
