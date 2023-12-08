import { Sketch } from "./Sketch.js";
const game = new Sketch()
const range = document.getElementById('size')
game.drawBoard()

range.addEventListener('input', () => {
    let point = document.querySelector('.range-value')
    game.setSquares(range.value)
    game.drawBoard()
    point.textContent = range.value
    let boxes = document.querySelectorAll('.box')
    hoverBoard(boxes)
})

/* TODO: colour as variable */
function hoverBoard(boxes) {
    boxes.forEach(element => {
        element.addEventListener('click', (event) => {
            if (event.target.style.backgroundColor === "") event.target.style.backgroundColor = "blue"
            else event.target.style.backgroundColor = ""
        })
    });
}
