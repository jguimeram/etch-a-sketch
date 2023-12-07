export class Sketch {

    container
    board
    row
    constructor() {
        this.app = document.getElementById('app')
        this.createContainer()
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
        this.row.style.width = "100%"
        this.row.style.display = "flex"
        this.row.style.justifyContent = "center"
        this.container.appendChild(this.row)
    }
    createBoard() {
        this.board = document.createElement('div')
        this.board.style.width = "16px"
        this.board.style.height = "16px"
        this.board.style.border = "1px solid black"
        this.board.classList.add('box')
        this.row.appendChild(this.board)
    }


}