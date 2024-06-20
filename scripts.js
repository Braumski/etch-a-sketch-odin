const container = document.querySelector(".grid-container");

function divGridGenerator() {
  for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
  }
  return container;
}

const grid = divGridGenerator();
gridDiv = container.querySelectorAll("div");

gridDiv.forEach((div) => {
  div.addEventListener("mouseover", () => {
    div.id = "draw";
  });
});
