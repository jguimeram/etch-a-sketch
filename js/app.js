/*
 :
[ ] grjd (16 x 16 by default)
[ ] resize grid with input range (8, 16, 32...). 
[ ] Width of the grid must not be changed 
[ ] EventListeners order:
    [ ] DOMContent
    [ ] Range Input => grid resizing
    [ ] Color selector => onclick event
*/

let entryPoint = document.querySelector('.entry__point')
const range = document.querySelector('.range')
const color = document.querySelector('.color')
const boxes = document.querySelectorAll('.box')
const currentColor = document.querySelector('.color')
const randomButt = document.querySelector('.random')
const rainbowButt = document.querySelector('.rainbow')

let grid
let row
let box

const boxSize = {
    numberOfCells: 16,
    gridWidth: 400,
    width: "1",
    height: "1",
}

function resetGame() {
    const reset = document.querySelector('.reset')
    reset.onclick = () => {
        removeGrid()
        drawGrid()
    }
}

function createGrid() {
    grid = document.createElement('div')
    grid.classList.add('grid')
    entryPoint.appendChild(grid)
}

function createRow() {
    row = document.createElement('div')
    row.classList.add('row')
    grid.appendChild(row)
}
function createBox() {
    box = document.createElement('div')
    box.classList.add('box')
    box.style.width = (boxSize.gridWidth / boxSize.numberOfCells).toString() + "px"
    box.style.height = (boxSize.gridWidth / boxSize.numberOfCells).toString() + "px"
    row.appendChild(box)

}

function drawGrid() {
    for (let i = 0; i < boxSize.numberOfCells; i++) {
        createRow()
        for (let j = 0; j < boxSize.numberOfCells; j++) {
            createBox()
        }
    }
}

function removeGrid() {
    grid.textContent = ""
}

function dataIDinBoxes() {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('data-id', i)
    }
}

function paint() {
    const grid = document.querySelector('.grid')
    grid.addEventListener('click', (e) => {
        if (e.target.classList.contains('box')) {
            selectColor(e)
        }
    })
}

function selectColor(arg) {
    let color
    rainbowButt.classList.contains('rainbow-mode') ? color = randomColor() : color = currentColor.value
    if (arg.target.style.backgroundColor == "") arg.target.style.backgroundColor = color
    else arg.target.style.backgroundColor = ""
}

function changeGrid() {

    range.addEventListener('input', (e) => {
        boxSize.numberOfCells = Number(e.target.value);
        boxSize.width = boxSize.gridWidth / Number(e.target.value);
        boxSize.height = boxSize.gridWidth / Number(e.target.value);
        range.nextElementSibling.textContent = `Value: ${e.target.value} x ${e.target.value}`
        removeGrid()
        drawGrid()
    })

}

function randomColor() {
    //"#0000FF"
    console.log("enter");
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    const res = []
    res[0] = "#"
    for (let i = 1; i < 7; i++) {
        res.push(hex[Math.floor(Math.random() * 16)])
    }
    return res.join('');
}

function generateRandomColor() {
    randomButt.addEventListener('click', (e) => {
        currentColor.value = randomColor()
    })
}



function rainbow() {
    rainbowButt.addEventListener('click', (e) => {
        e.target.classList.toggle("rainbow-mode")
    })
}

(() => {
    createGrid()
    drawGrid()
    dataIDinBoxes()
    paint()
    changeGrid()
    resetGame()
    generateRandomColor()
    rainbow()
})()













