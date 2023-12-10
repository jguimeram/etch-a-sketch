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
let grid
let row
let box

const createGrid = function () {
    grid = document.createElement('div')
    grid.classList.add('grid')
    entryPoint.appendChild(grid)
}

const createRow = function () {
    row = document.createElement('div')
    row.classList.add('row')
    grid.appendChild(row)
}
const createBox = function () {
    box = document.createElement('div')
    box.classList.add('box')
    row.appendChild(box)
}


createGrid()

for (let i = 0; i < 16; i++) {
    createRow()
    for (let j = 0; j < 16; j++) {
        createBox()
    }
}






