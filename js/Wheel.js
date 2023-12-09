export class Wheel {

    selectColor
    constructor() {
        this.selectColor = document.querySelector('.color')
        console.log(this.selectColor);
    }


    getColorValue() {
        console.log(this.selectColor);
    }
}
