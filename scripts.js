"use strict";

const generateGridButton = document.getElementById("generate-grid-button");
let grid = gridGenerator(256);
const gridDiv = grid.querySelectorAll("div");

function gridGenerator(totalGridPixels) {
  const grid = document.querySelector(".grid-container");

  for (let i = 0; i < totalGridPixels; i++) {
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
      newDiv.id = "draw";
    });
  }
  return grid;
}

generateGridButton.addEventListener("click", () => {
  grid.textContent = "";
  const userInput = prompt("Enter grid resolution:");
  grid = gridGenerator(userInput);
});
