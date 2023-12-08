export class Sketch {

    squares
    app
    container
    row
    board
    boxes
    constructor() {
        this.squares = 16
        this.app = document.getElementById('app')
        this.createContainer()
        // this.setIdOnBoxes()
    }

    setSquares(squares = 16) {
        this.squares = squares
    }


    createContainer() {
        this.container = document.createElement('div')
        this.container.classList.add('container')
        this.container.style.width = "75%"
        this.container.style.margin = "auto"
        this.app.appendChild(this.container)
    }

    createRow() {
        this.row = document.createElement('div')
        this.row.classList.add('row')
        this.row.style.width = "100%"
        this.row.style.display = "flex"
        this.row.style.justifyContent = "center"
        this.container.appendChild(this.row)
    }
    createBoard() {
        this.board = document.createElement('div')
        //TODO: width and height as variables
        this.board.style.width = (480 / this.squares).toString() + "px"
        this.board.style.height = (480 / this.squares).toString() + "px"
        this.board.style.border = "1px solid black"
        this.board.style.cursor = "pointer"
        this.board.classList.add('box')
        this.row.appendChild(this.board)
    }

    removeBoard() {
        this.container.textContent = ""
    }

    drawBoard() {
        this.removeBoard()
        for (let j = 0; j < this.squares; j++) {
            this.createRow()
            for (let i = 0; i < this.squares; i++) {
                this.createBoard()
            }
        }
    }

    /*   setIdOnBoxes() {
  
          
  
          for (let i = 0; i < this.boxes.length; i++) {
              this.boxes[i].setAttribute('data-id', i)
          }
      } */

    getBoxesArray() {
        return this.boxes
    }


}