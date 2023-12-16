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

let grid
let row
let box

const boxSize = {
    numberOfCells: 16,
    gridWidth: 400,
    width: "1",
    height: "1",
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
    const boxes = document.querySelectorAll('.box')
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute('data-id', i)
    }
}

function paint() {
    const grid = document.querySelector('.grid')
    grid.addEventListener('click', (e) => {
        if (e.target.classList.contains('box')) {
            changeColor(e)
        }
    })
}

function changeColor(arg) {
    const currentColor = document.querySelector('.color')
    if (arg.target.style.backgroundColor == "") arg.target.style.backgroundColor = currentColor.value
    else arg.target.style.backgroundColor = ""
}

function changeGrid() {

    range.addEventListener('input', (e) => {
        boxSize.numberOfCells = Number(e.target.value);
        boxSize.width = boxSize.gridWidth / Number(e.target.value);
        boxSize.height = boxSize.gridWidth / Number(e.target.value);
        removeGrid()
        drawGrid()
    })

}

(() => {
    createGrid()
    drawGrid()
    dataIDinBoxes()
    paint()
    changeGrid()
})()













