const gridContainer = document.querySelector("#container");
let gridSize = 16;

function makeGrid(boxNumber) {

    for (let i = 1; i <= boxNumber; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.toggle("gridRow");
        gridContainer.appendChild(rowDiv);
    }
    const gridRow = document.querySelectorAll(".gridRow");
    gridRow.forEach((row) => {
        for (i = 1; i <= boxNumber; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.toggle("gridItem");
            row.appendChild(itemDiv);
        }
    })

}

makeGrid(gridSize);
