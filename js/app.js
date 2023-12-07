import { Sketch } from "./Sketch.js";
const test = new Sketch()

let boxes = 16

//create board

for (let j = 0; j < boxes; j++) {
    test.createRow()
    for (let i = 0; i < boxes; i++) {
        test.createBoard()
    }
}


//select boxes

const box = document.querySelector('.box')