let chapter = Number(localStorage.getItem("rd_chapter") || 1);

const storyData = [
{
title:"Chapter 1: Falling Dawn",
goal:25,
boss:"Triangle Tyrant"
},
{
title:"Chapter 2: Circle Revolt",
goal:40,
boss:"Cyclone Circle"
},
{
title:"Chapter 3: Golden Storm",
goal:60,
boss:"King Square"
},
{
title:"Chapter 4: Final Geometry",
goal:90,
boss:"Polygon Emperor"
}
];

function saveChapter(){
localStorage.setItem("rd_chapter", chapter);
}

function openStory(){
let s = storyData[chapter - 1];

if(!s){
alert("All chapters cleared 👑");
return;
}

alert(
s.title +
"\nReach combo x" + s.goal +
"\nBoss: " + s.boss
);
}

function checkStoryProgress(){

let s = storyData[chapter - 1];
if(!s) return;

if(bestCombo >= s.goal){

let reward = s.goal;

addCoins(reward);

alert(
"Chapter Cleared!\n" +
s.title +
"\n+" + reward + " coins"
);

chapter++;
saveChapter();
}
}
