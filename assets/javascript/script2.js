var container = document.getElementById("box-container");

//when its 0, player 1 will choose "x" first
let playerTurn = 0;
//2D array
var TicTacToe = Array.from(Array(3), () => new Array(3));

createBoard();

function createBoard() {
  for (let i = 0; i < 9; i++) {
    var createElem = document.createElement("div");
    createElem.setAttribute("id", `${i}`);
    createElem.classList.add("userInput");
    createElem.addEventListener("click", xo);
    container.appendChild(createElem);
    var elemStyle = document.getElementById(`${i}`);
    elemStyle.style.border = "solid black 1px";
  }
}

//updates x or o on html
function xo(e) {
  if (playerTurn === 0) {
    if (!e.target.innerHTML) {
      //will prevent player from overwriting
      e.target.innerHTML = "x"; //player 1 will input 'x'
      updateTicTacToe(e);
      checkWinner();
      playerTurn = playerTurn = 1; //switch to player 2
    } else {
      alert("can't pick this again!");
    }
  } else {
    if (!e.target.innerHTML) {
      e.target.innerHTML = "o"; //player 2 will input 'o'
      updateTicTacToe(e);
      checkWinner();

      playerTurn = playerTurn = 0; //switch to player 1
    } else {
      alert("can't pick this again!");
    }
  }
}

//updates 2D array
function updateTicTacToe(e) {
  var targetIdNum = Number(e.target.id);
  console.log(targetIdNum);
  if (targetIdNum < 3) {
    TicTacToe[0][targetIdNum] = playerTurn; // 2D array will store 0 for player 1, and stores 1 for player 2.
    console.log(TicTacToe);
  } else if (targetIdNum > 2 && targetIdNum < 6) {
    TicTacToe[1][targetIdNum - 3] = playerTurn;
    // TicTacToe[1][targetIdNum] = playerTurn;
    console.log(TicTacToe);
  } else if (targetIdNum > 5 && targetIdNum < 9) {
    TicTacToe[2][targetIdNum - 6] = playerTurn;
    console.log(TicTacToe);
  }
}

function checkWinner() {
  const div0 = document.getElementById("0").innerHTML;
  const div1 = document.getElementById("1").innerHTML;
  const div2 = document.getElementById("2").innerHTML;
  const div3 = document.getElementById("3").innerHTML;
  const div4 = document.getElementById("4").innerHTML;
  const div5 = document.getElementById("5").innerHTML;
  const div6 = document.getElementById("6").innerHTML;
  const div7 = document.getElementById("7").innerHTML;
  const div8 = document.getElementById("8").innerHTML;

  //horizontal check
  if (div0 && div1 && div2) {
    if (
      TicTacToe[0][0] === TicTacToe[0][1] &&
      TicTacToe[0][0] === TicTacToe[0][2]
    ) {
      playerwins();
    }
  }

  if (div3 && div4 && div5) {
    if (
      TicTacToe[1][0] === TicTacToe[1][1] &&
      TicTacToe[1][0] === TicTacToe[1][2]
    ) {
      playerwins();
    }
  }

  if (div6 && div7 && div8) {
    if (
      TicTacToe[2][0] === TicTacToe[2][1] &&
      TicTacToe[2][0] === TicTacToe[2][2]
    ) {
      playerwins();
    }
  }

  //vertical check

  if (div0 && div3 && div6) {
    if (
      TicTacToe[0][0] === TicTacToe[1][0] &&
      TicTacToe[0][0] === TicTacToe[2][0]
    ) {
      playerwins();
    }
  }
  if (div1 && div4 && div7) {
    if (
      TicTacToe[0][1] === TicTacToe[1][1] &&
      TicTacToe[0][1] === TicTacToe[2][1]
    ) {
      playerwins();
    }
  }
  if (div2 && div5 && div8) {
    if (
      TicTacToe[0][2] === TicTacToe[1][2] &&
      TicTacToe[0][2] === TicTacToe[2][2]
    ) {
      playerwins();
    }
  }

  //diagonal check
  if (div0 && div4 && div8) {
    if (
      TicTacToe[0][0] === TicTacToe[1][1] &&
      TicTacToe[0][0] === TicTacToe[2][2]
    ) {
      playerwins();
    }
  }
  if (div2 && div4 && div6) {
    if (
      TicTacToe[0][2] === TicTacToe[1][1] &&
      TicTacToe[0][2] === TicTacToe[2][0]
    ) {
      playerwins();
    }
  }
}

//after win, page will refresh
function playerwins() {
  if (playerTurn === 0) {
    alert(
      "player 1 wins, game will restart in 2 seconds after closing this window"
    );
    setTimeout(() => {
      location.reload();
    }, 2000);
  } else {
    alert(
      "player 2 wins, game will restart in 2 seconds after closing this window"
    );
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
