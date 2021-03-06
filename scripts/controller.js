var buttons = document.querySelectorAll("button");

var player = true;
var whiteSpace = " ";

for (var ind = 0; ind < buttons.length; ind++) {
    buttons[ind].addEventListener("click", (event) => {
        allot(event.target);
    });
}

document.querySelector("#reset").addEventListener("click", reset);

function allot(button) {
    if (button.innerHTML != whiteSpace || checkWin(buttons)) return; //reomved double mark

    if(player)
    {
        button.innerHTML ="O";
    
        button.style.color='red';
    }
    else
    {
        button.innerHTML ="X";
        button.style.color='blue';
    }
    document.querySelector("#currentPlayer").innerHTML = player ? "X" : "O";

    player = !player;

    var isWin = checkWin(buttons);

    if (isWin) {
        endGame(isWin);
    }
}

function endGame(winner) {
    if (winner === "draw") {
        document.querySelector("#winner").innerText = "Game Draw";
    } else {
        document.querySelector("#winner").innerText = "Winner: " + winner;
    }

    document.querySelector("#currentIndicatorDiv").innerHTML = "";

    // document.querySelector('#reset').style.display='block';
}

function reset() {
    for (var ind = 0; ind < buttons.length; ind++) {
        buttons[ind].innerHTML = whiteSpace;
    }

    player = true;

    document.querySelector("#currentIndicatorDiv").innerHTML =
        'Current Marker: <span id="currentPlayer">O</span>';

    document.querySelector("#winner").innerText = "";

    // document.querySelector('#reset').style.display='none';
}