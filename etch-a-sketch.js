const gridContainer = document.querySelector("#container");
let gridSize = 16;
const newGridButton = document.querySelector("#newGrid");
const eraseButton = document.querySelector("#erase");

//CODE TO CHANGE GRID ITEMS BACKGROUND COLOR

function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function changeAlphaValue(eventTarget) {
    if (!eventTarget.mouseEnterCount) {
        eventTarget.mouseEnterCount = 1;
    }
    let alphaValue = 0.1 * eventTarget.mouseEnterCount++;
    const maxAlphaValue = 1;
    if (alphaValue >= maxAlphaValue) {
        alphaValue = maxAlphaValue;
    }
    console.log(alphaValue);
    return alphaValue;
}


function changeItemBackgroundColor() {

    
    const gridItems = document.querySelectorAll(".gridItem");
    

    gridItems.forEach((item) => {
        item.addEventListener("mouseenter", (event) => {
            
            let redValue = getRandomNumber();
            let greenValue = getRandomNumber();
            let blueValue = getRandomNumber();
            let alphaValue = changeAlphaValue(event.target);


            item.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
        })
        // item.addEventListener("mouseleave", () => {
        //     item.style.backgroundColor = "white";
        // })
    });
};


//CODE TO MAKE A GRID

function makeGrid(boxNumber) {


    for (let i = 1; i <= boxNumber; i++) {
        let rowDiv = document.createElement("div");
        rowDiv.classList.toggle("gridRow");
        gridContainer.appendChild(rowDiv);
    }

    const gridRows = document.querySelectorAll(".gridRow");
    gridRows.forEach((row) => {
        for (i = 1; i <= boxNumber; i++) {
            const itemDiv = document.createElement("div");
            itemDiv.classList.toggle("gridItem");
            row.appendChild(itemDiv);
        }
    })
    changeItemBackgroundColor();
}

makeGrid(gridSize);



//ERASE BUTTON CODE TO REMOVE ITEMS BACKGROUND COLOR WHEN CLICKED

function eraseItemColor() {
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach((item) => {
        item.style.backgroundColor = "white";
    });
};


eraseButton.addEventListener("click", eraseItemColor);
    

// MAKE NEW GRID BUTTON CODE

function getGridNumber() {

    let selection = prompt("Please choose a number between 1 and 100");
    while (isNaN(selection) || selection > 100 || selection < 1) {
        selection = prompt ("That's an incorrect selection. Please choose a number from 1-100");
    }
    return selection;
}


function makeNewGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    makeGrid(getGridNumber());
}

newGridButton.addEventListener("click", () => makeNewGrid());




/*commented outmake pen effect attempted code*/


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
