"use strict";
const container = document.querySelector(".main");
const difficultyButtons = document.querySelectorAll(".dfBtn");

const playBtn = document.querySelector("#playBtn");
playBtn.disabled = true;

let secondClicked = false;

let gameLevel = null;
const setGameLevel = (lvl) => {
  gameLevel = lvl;
};

const getGameLevel = () => {
  return gameLevel;
};

container.addEventListener("click", (e) => {
  if (e.target === container) {
    playBtn.disabled = true;
    difficultyButtons.forEach((button) => {
      button.disabled = false;
    });
  }
});

difficultyButtons.forEach((outerButton) => {
  outerButton.addEventListener("click", (e) => {
    setGameLevel(outerButton.value);
    let buttons = difficultyButtons;
    buttons.forEach((innerButton) => {
      innerButton.disabled = innerButton.value !== outerButton.value;
    });
    playBtn.disabled = false;
  });
});

playBtn.addEventListener("click", () => {
  localStorage.setItem("gameLevel", getGameLevel());
  window.location.href = "playground.html";
});
