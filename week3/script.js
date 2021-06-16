const playerTurn = document.getElementById("playerTurn");
playerTurn.innerHTML = `Player 1`;
​
const ticTacToeTable = document.getElementById("ticTacToeTable");
​
ticTacToeTable.addEventListener("click", mark);
​
function mark(event){
    console.log(event.type);
    if(playerTurn.innerHTML == "Player 1"){
        event.target.innerHTML = "X";
        playerTurn.innerHTML = "Player 2";
    } 
    else if (playerTurn.innerHTML == "Player 2"){
        event.target.innerHTML = "O";
        playerTurn.innerHTML = "Player 1";
    }
}
​
function func() {
    table = document.getElementById("ticTacToeTable");
    // clear = document.createElement('tbody');
​
    // populate_with_new_rows(clear);
    // table.parentNode.replaceChild(clear, table);
    // for (i = 9; i > 0; i--)
     
    //     {
    //         d =  table.getElementsByTagName("td")[i];
    //         d = clear;
    //         console.log(d);
    //     }
    table.innerHTML = "";
}
