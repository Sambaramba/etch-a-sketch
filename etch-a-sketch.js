const gridContainer = document.querySelector("#container");
let gridSize = 16;
const newDiv = document.createElement("div");

function makeGrid(boxNumber) {
    let gridTotal = boxNumber * boxNumber
    return gridTotal;
}

let gridTotal = makeGrid(gridSize);