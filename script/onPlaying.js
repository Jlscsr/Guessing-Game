"use strict";
const instruction = document.querySelector("#instructionContainer");
let gameLevel = localStorage.getItem("gameLevel");

let levelTimer = {
  easy: 15,
  medium: 10,
  hard: 4,
  expert: 2,
};

for (let [key, value] of Object.entries(levelTimer)) {
  if (gameLevel === key) {
    instruction.innerHTML = `<h2>Guess as many numbers as possible within ${value} minutes!</h2>`;
  }
}

// TODO continue for web functionality
