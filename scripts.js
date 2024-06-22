"use strict";

const generateGridButton = document.getElementById("generate-grid-button");
let grid = gridGenerator(16);
const gridDiv = grid.querySelectorAll("div");

function gridGenerator(heightAndWidth) {
  const container = document.querySelector(".grid-container");
  const totalArea = heightAndWidth * heightAndWidth;

  for (let i = 0; i < totalArea; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "drawing-div";
    newDiv.style.width = `calc(100% / ${heightAndWidth})`;
    newDiv.style.height = `calc(100% / ${heightAndWidth})`;
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.backgroundColor = "white";
    });
  }

  return container;
}

function createGridErrorHandling(userInput) {
  if (Number(userInput) && userInput <= 100) {
    grid.textContent = "";
    grid = gridGenerator(Number(userInput));
  } else if (userInput > 100) {
    alert(
      "100 and above will affect performance, please choose a lower number"
    );
  } else {
    alert("Invalid Input");
  }
}
generateGridButton.addEventListener("click", () => {
  const userInput = prompt("Enter grid pixels on each side");
  createGridErrorHandling(userInput);
});
