"use strict";

const container = document.querySelector(".grid-container");
const createButton = document.getElementById("create-grid-button");
const grid = divGridGenerator();

function divGridGenerator() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
  }
  return container;
}

gridDiv = container.querySelectorAll("div");

gridDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.id = "draw";
  });
});
