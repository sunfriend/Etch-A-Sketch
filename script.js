const bodyContainer = document.querySelector("body");
const buttonsArray = document.querySelectorAll("button");
const areaSizeInfo = document.querySelector("#area-size_info");
const squaresContainer = document.createElement("div");
squaresContainer.classList.add("squares-container");
bodyContainer.appendChild(squaresContainer);
let sketchAreaSize = 2;
let numberOfSquares = 4;
const colorsArray = ["black", "red", "orange", "yellow", "azure", "purple", "green", "blue", "indigo", "violet"];
areaSizeInfo.textContent = `${sketchAreaSize}x${sketchAreaSize}`;

window.onload = () => createSquares(numberOfSquares);

function createSquares(squares = 16) {
    for (let i = 0; i < squares; i++) {
        const squareUnit = document.createElement("div");
        squareUnit.setAttribute("id", i + "-sq");
        squareUnit.setAttribute("class", "square-block");
        squaresContainer.appendChild(squareUnit);
    }
}

function clearSquares(parentContainer) {
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}

squaresContainer.addEventListener("click", function(e) {
    if(e.target.id) {
        e.target.style.backgroundColor = randomColorGenerator();
    }
});

squaresContainer.addEventListener("mouseover", function(e) { 
hoveringSquares(e);
});

function randomColorGenerator() {
    return colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

function hoveringSquares(event) {
    if(event.target.id) {
        event.target.classList.add("color-change");
        /* setTimeout(() => event.target.classList.remove("color-change"), 500, false); */
        console.log(event.target.id);
    }
}

buttonsArray.forEach(button => button.addEventListener("click", function(e) { 
increaseDecreaseArea(e);
}));

function increaseDecreaseArea(event) {
    if (event.target.id === "increase-button") {
        sketchAreaSize++;      
    }
    if (event.target.id === "decrease-button") {
        sketchAreaSize--; 
    }
    clearSquares(squaresContainer);
    createSquares(Math.pow(sketchAreaSize, 2));
    squaresContainer.style.gridTemplateColumns = `repeat(${sketchAreaSize}, 1fr)`; 
    squaresContainer.style.gridTemplateRows = `repeat(${sketchAreaSize}, 1fr)`;
    areaSizeInfo.textContent = `${sketchAreaSize}x${sketchAreaSize}`;
}