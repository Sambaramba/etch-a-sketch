const gridContainer = document.querySelector("#container");
let gridSize = 16;



function makeGrid(boxNumber) {

    for (let i = 1; i <= boxNumber; i++) {
        let rowDiv = document.createElement("div");
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

const gridItems = document.querySelectorAll(".gridItem");
const allGridItems = document.querySelectorAll("div.gridItem");

function getRandomNumber() {
    return Math.floor(Math.random() * 255)
} 
function changeItemBackgroundColor (redValue, greenValue, blueValue,) {
    
    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            redValue = getRandomNumber();
            greenValue = getRandomNumber();
            blueValue = getRandomNumber();
            item.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, 0.1)`;
        })
        // item.addEventListener("mouseleave", () => {
        //     item.style.backgroundColor = "white";
        // })
    });
};

changeItemBackgroundColor(getRandomNumber, getRandomNumber, getRandomNumber);

// function eraseGrid(items) {
//     items.forEach((item) => item.style.backgroundColor = "white");
    
//     // allGridItems.forEach((item) => gridRow.removeChild(item));
//     // const allGridRows = document.querySelectorAll("div.gridRow");
//     // allGridRows.forEach((row) => gridContainer.removeChild(row));
    
// };

// const erase = document.querySelector("#erase");
// erase.addEventListener("click", () => eraseGrid(allGridItems));


/*commented out code to attempt to make pen effect*/
// let interval;   

// gridContainer.addEventListener("mousedown", function (event) {
//         event.stopPropagation;
//         interval = setInterval(() => {
//         let x = event.clientX;
//         let y = event.clientY;
//         let cursorDiv = document.createElement("div")
//         cursorDiv.classList.toggle("dot");
//         cursorDiv.style.left = x + "px";
//         cursorDiv.style.top = y + "px";
//         gridContainer.appendChild(cursorDiv);
//     }, 100);
// } ) 
// gridContainer.addEventListener("mouseup", () => {
//         clearInterval(interval);
// });


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
