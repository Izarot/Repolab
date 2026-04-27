let chapter =
Number(localStorage.getItem("rd_chapter") || 1);

const storyData = [

{
title:"Chapter 1: Falling Dawn",
goal:15,
boss:"Triangle Tyrant"
},

{
title:"Chapter 2: Circle Revolt",
goal:25,
boss:"Cyclone Circle"
},

{
title:"Chapter 3: Golden Storm",
goal:40,
boss:"King Square"
},

{
title:"Chapter 4: Final Geometry",
goal:60,
boss:"Polygon Emperor"
}

];

function saveChapter(){
localStorage.setItem("rd_chapter", chapter);
}

function openStory(){

let s = storyData[chapter - 1];

if(!s){
alert("All story chapters cleared 👑");
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
"CHAPTER CLEARED!\n\n" +
s.title +
"\nBoss Defeated: " + s.boss +
"\nReward: +" + reward + " coins"
);

chapter++;
saveChapter();
}
}