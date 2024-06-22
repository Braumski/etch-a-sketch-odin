"use strict";

const createButton = document.getElementById("create-grid-button");
const grid = gridGenerator();
const gridDiv = grid.querySelectorAll("div");

gridDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.id = "draw";
  });
});

function gridGenerator() {
  const grid = document.querySelector(".grid-container");

  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    grid.appendChild(newDiv);
  }
  return grid;
}
