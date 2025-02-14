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

function getRandomNumber() {
    return Math.floor(Math.random() * 255)
} 

const gridItems = document.querySelectorAll(".gridItem");
gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let redValue = getRandomNumber();
        let greenValue = getRandomNumber();
        let blueValue = getRandomNumber();
        item.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, 0.1)`;
    })
    // item.addEventListener("mouseleave", () => {
    //     item.style.backgroundColor = "white";
    // })
})

/*create function,have x and y position parameters, create div
 element, attach a class, and position styles and top and left with
 arguments as value*/
 /* the arguments could be button event screen or client coordinates*/
 /*could creat class in css with all styles except top and left styles*/
 /*could add color,width,height and radius to the class to make black dot*/

// gridItems.forEach((item) => {
//     item.addEventListener("mousedown", (e) => {
//         e.stopPropagation()
//         if (e.button === 0) {
        //    item.styles.cursor: url();

//         }
//     })
// })
