function toggleSound(){

if(RD.sound === undefined){
RD.sound = true;
}

RD.sound = !RD.sound;
saveData();

alert("Sound: " + (RD.sound ? "ON" : "OFF"));
}

function toggleVibration(){

if(RD.vibration === undefined){
RD.vibration = true;
}

RD.vibration = !RD.vibration;
saveData();

alert("Vibration: " + (RD.vibration ? "ON" : "OFF"));
}

function cycleTheme(){

let all = [
"theme-neon",
"theme-inferno",
"theme-ultra"
];

let i = all.indexOf(RD.theme);
i++;

if(i >= all.length){
i = 0;
}

RD.theme = all[i];

document.body.className = RD.theme;

saveData();

alert("Theme changed");
}