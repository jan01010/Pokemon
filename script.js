// HTML DOM Elements
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

var allPokemon;

fetch("pokemon.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (allPokemon = strData.split(/\r?\n/)));

button1.addEventListener("click", showPokemon);
button2.addEventListener("click", teamPokemon);
input1.addEventListener("change", showLetter);
input2.addEventListener("change", showNumLetter);

function showPokemon() {
  let randIndex = Math.floor(Math.random() * allPokemon.length);
  span1.innerHTML = allPokemon[randIndex];
}

function teamPokemon() {
  span2.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let randIndex = Math.floor(Math.random() * allPokemon.length);
    span2.innerHTML += allPokemon[randIndex] + " ";
  }
}

function showLetter() {
  div1.innerHTML = "";
  var letter = input1.value;
  input1.value = "";

  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i]; // e.g. "pikachu"
    let firstLetter = currentPokemon.charAt(0);
    let firstL = currentPokemon.charAt(0);
    let firstC = firstL.toUpperCase();
    let remainWord = currentPokemon.slice(1);

    let capPokemon = firstC + remainWord;

    if (firstLetter == letter) {
      div1.innerHTML += capPokemon + "<br>";
    }
  }
}

function showNumLetter() {
  div2.innerHTML = "";
  let num = input2.value;
  input2.value = "";

  for (let i = 0; i < allPokemon.length; i++) {
    let currentPokemon = allPokemon[i];
    let numLetter = currentPokemon.length;

    let firstL = currentPokemon.charAt(0);
    let firstC = firstL.toUpperCase();
    let remainWord = currentPokemon.slice(1);

    let capPokemon = firstC + remainWord;

    if (numLetter == num) {
      div2.innerHTML += capPokemon + "<br>";
    }
  }
}
