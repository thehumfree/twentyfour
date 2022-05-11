let output = document.getElementById("result");
let pyresult1 = document.getElementById("pyresult1");
let pyresult2 = document.getElementById("pyresult2");
//player counter
let py1 = 0;
let py2 = 0;
pyresult1.innerHTML = py1;
pyresult2.innerHTML = py2;
function roll() {
  //generate random number
  let player1 = Math.floor(Math.random() * 6 + 1);
  let player2 = Math.floor(Math.random() * 6 + 1);
  //get div to change image
  let play1img = document.getElementById("play1");
  let play2img = document.getElementById("play2");
  //change image based on random number generated
  play1img.setAttribute("src", `images/dice${player1}.png`);
  play2img.setAttribute("src", `images/dice${player2}.png`);
  //conditions for displaying winner
  if (player1 > player2) {
    output.innerHTML = `Player 1 wins`;
    py1 += 1;
    pyresult1.innerHTML = py1;
  } else if (player1 == player2) {
    output.innerHTML = `It's a draw`;
  } else {
    output.innerHTML = `Player 2 wins`;
    py2 += 1;
    pyresult2.innerHTML = py2;
  }
}

//result player result
function reset() {
  py1 = 0;
  py2 = 0;
  pyresult1.innerHTML = py1;
  pyresult2.innerHTML = py2;
  output.innerHTML = `Start Game`;
}
