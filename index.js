const colorArray = ['red', 'blue', 'yellow', 'orange',  'green', 'blue', 'purple', 'brown', 'gray', 'black']

const WIDTH = 90;
const HEIGHT = 90;
let selectedColor = 'red'
let isMoving = false;

let container = document.getElementById('grid-container')
for (let i = 0; i < WIDTH; i++) {
    let outerDiv = document.createElement('div');
    outerDiv.className = 'rowDiv'
    for (let j = 0; j < HEIGHT; j++) {
        let innerBlock = document.createElement('div')
        innerBlock.className = 'innerBlock'
        innerBlock.onmousedown = (event) => {
            isMoving = true
            innerBlock.style.backgroundColor = selectedColor
        }
        innerBlock.onmouseover = ()=>{
            if(isMoving)
            innerBlock.style.backgroundColor = selectedColor
        }
        innerBlock.onmouseup = () =>{
            isMoving = false
        }
        outerDiv.append(innerBlock)
    }
    container.append(outerDiv)
}


let palletDiv = document.getElementById('palletRow')

colorArray.forEach((element) => {
    let colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = element
    colorDiv.className = 'palleteColorDiv'
    colorDiv.onclick = (event) => {
        selectedColor = colorDiv.style.backgroundColor;
    }
    palletDiv.append(colorDiv)
})
