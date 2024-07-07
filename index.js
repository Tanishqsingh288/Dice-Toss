function getrandom() {
  event.preventDefault();
  var a = getrandom1();
  var b = getrandom2();
  if (a[4] > b[4]) {
    document.getElementById("main-text").innerHTML = "Player 1 Wins !";
  }
  if (a[4] < b[4]) {
    document.getElementById("main-text").innerHTML = "Player 2 Wins !";
  }
  if (a[4] == b[4]) {
    document.getElementById("main-text").innerHTML =
      "Ooops ! its a tie. Roll again.";
  }
  document.getElementById("1stdicebox").innerHTML =
    '<img src="' + a + '" alt="">';
  document.getElementById("2nddicebox").innerHTML =
    '<img src="' + b + '" alt="">';
}
function getrandom1() {
  const array1 = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  let randomIndex = Math.floor(Math.random() * 6);
  return array1[randomIndex];
}

function getrandom2() {
  const array2 = [
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];
  let randomIndex = Math.floor(Math.random() * 6);
  return array2[randomIndex];
}
