function startPassMode(){

loadData();

alert(
"LOCAL PASS MODE\n\n" +
"Player 1 plays.\n" +
"Pass phone to Player 2.\n" +
"Highest score wins."
);
}

function compareScores(a,b){

if(a>b) return "Player 1 Wins";
if(b>a) return "Player 2 Wins";
return "Draw";
}
