const gridContainer = document.querySelector("#container");
let gridSize = 16;


function makeGrid(boxNumber) {
    let gridTotal = boxNumber * boxNumber
    return gridTotal;
}

let gridTotal = makeGrid(gridSize);

for (let i = 1; i <= gridTotal; i++) {
    const newDiv = document.createElement("div");
   gridContainer.appendChild(newDiv);
}
