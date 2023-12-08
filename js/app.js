import { Sketch } from "./Sketch.js";
const game = new Sketch()

const boxEvent = game.getBoxesArray()

console.log(boxEvent);

boxEvent.forEach(element => {
    element.addEventListener('click', (event) => {
        if (event.target.style.backgroundColor === "") event.target.style.backgroundColor = "blue"
        else event.target.style.backgroundColor = ""
    })
});